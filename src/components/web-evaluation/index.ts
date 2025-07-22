export const addWebEvaluation = function () {
  const scriptLoadedMessage: string = "Script loaded";
  const failedMessage: string = "Click event did not change the URL";
  let events: any[] = [];
  let recorder: (() => void) | undefined;

  let parentOrigin: string = "";
  try {
    parentOrigin = document.referrer ? new URL(document.referrer).origin : "*";
  } catch (e: unknown) {
    parentOrigin = "*";
  }

  const targetUrls: string[] = [
    "http://localhost:2222/",
    "https://app.crowdapp.io/",
    "https://version2.crowdapp.io/",
  ];

  interface BaseMessage {
    type: string;
    [key: string]: any;
  }

  function sendMessage(message: BaseMessage, retries: number = 2): void {
    const sendAttempt = (): void => {
      try {
        if (parentOrigin && parentOrigin !== "*") {
          parent.postMessage(message, parentOrigin);
        }

        parent.postMessage(message, "*");

        targetUrls.forEach(function (url: string) {
          try {
            parent.postMessage(message, url);
          } catch (e: unknown) {
            console.log(e);
          }
        });
      } catch (e: unknown) {
        if (retries > 0) {
          setTimeout(function () {
            sendMessage(message, retries - 1);
          }, 500);
        }
      }
    };

    sendAttempt();
  }

  function confirmScriptLoaded(): void {
    const confirmationMessage: BaseMessage = {
      type: "script_confirmation",
      message: "Script loaded and ready",
      timestamp: Date.now(),
      url: window.location.href,
      ready: true,
    };

    sendMessage(confirmationMessage);

    setTimeout(function () {
      sendMessage(confirmationMessage);
    }, 1000);

    let heartbeatCount: number = 0;
    const heartbeatInterval: any = setInterval(function () {
      if (heartbeatCount >= 5) {
        clearInterval(heartbeatInterval);
        return;
      }

      sendMessage({
        type: "script_heartbeat",
        message: "Script heartbeat",
        heartbeat: ++heartbeatCount,
        timestamp: Date.now(),
        url: window.location.href,
      });
    }, 2000);
  }

  function sendCurrentUrl(): void {
    const currentUrl: string = document.location.href;
    sendMessage({ type: "navigation", url: currentUrl });
  }

  function ensureRrwebLoaded(callback: () => void): void {
    if (typeof (window as any).rrweb !== "undefined") {
      callback();
      return;
    }

    const script: HTMLScriptElement = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/rrweb@latest/dist/rrweb.min.js";
    script.onload = callback;
    script.onerror = function (): void {
      sendMessage({
        type: "script_error",
        error: "Failed to load rrweb library",
      });
    };
    document.head.appendChild(script);
  }

  const observer: MutationObserver = new MutationObserver(
    function (): // mutationsList: MutationRecord[]
    void {
      sendCurrentUrl();
    }
  );

  const observerConfig: MutationObserverInit = {
    childList: true,
    subtree: true,
  };

  observer.observe(document, observerConfig);

  function handleClickEvent(): void {
    const previousUrl: string = document.location.href;

    setTimeout(function (): void {
      if (previousUrl === document.location.href) {
        sendMessage({ type: "click_no_nav", message: failedMessage });
      } else {
        sendCurrentUrl();
      }
    }, 100);
  }

  document.addEventListener("click", handleClickEvent, true);

  window.addEventListener("message", function (event: MessageEvent<any>): void {
    if (event.data && event.data.type === "detection_ping") {
      sendMessage({
        type: "script_confirmation",
        message: "Script responding to ping",
        timestamp: Date.now(),
        pingResponse: true,
      });
    }
  });

  function startRecording(): void {
    const isAllowedReferrer: boolean = targetUrls.some(function (
      url: string
    ): boolean {
      return document.referrer.startsWith(url);
    });
    const isInIframe: boolean = window.self !== window.top;

    if (isAllowedReferrer || isInIframe) {
      ensureRrwebLoaded(function (): void {
        try {
          if (recorder) {
            recorder();
          }

          events = [];

          recorder = (window as any).rrweb.record({
            emit: function (event: any): void {
              events.push(event);

              if (events.length % 50 === 0) {
                sendEventsToTargets();
              }
            },
            recordCanvas: true,
            recordCrossOriginIframes: true,
          });

          sendMessage({ type: "recording_started" });
        } catch (e: unknown) {
          sendMessage({ type: "recording_error", error: (e as Error).message });
        }
      });
    }
  }

  function sendEventsToTargets(): void {
    if (events.length === 0) return;

    const eventsToSend: any[] = events.slice();

    sendMessage({
      type: "rrweb_events",
      events: eventsToSend,
      timestamp: Date.now(),
      url: document.location.href,
    });
  }

  setInterval(sendEventsToTargets, 5000);

  function cleanup(): void {
    if (recorder) {
      recorder();
      recorder = undefined;
    }

    observer.disconnect();
    document.removeEventListener("click", handleClickEvent, true);

    sendEventsToTargets();

    sendMessage({ type: "cleanup_complete" });
  }

  window.addEventListener("beforeunload", cleanup);

  function initializeScript(): void {
    try {
      sendMessage({ type: "script_loaded", message: scriptLoadedMessage });

      confirmScriptLoaded();

      startRecording();
    } catch (e: unknown) {
      sendMessage({
        type: "script_error",
        error: (e as Error).message,
        timestamp: Date.now(),
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeScript);
  } else {
    initializeScript();
  }

  setTimeout(initializeScript, 100);
};
