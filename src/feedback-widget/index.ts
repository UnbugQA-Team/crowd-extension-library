import {
  extensionBaseOriginUrl,
  generateId,
  getClientSiteDomain,
  widgetBaseUrl,
} from "../utils";
import {
  StartCountDownEvent,
  WidgetDisplayRules,
  WidgetEventType,
  WidgetImpressionEvent,
  WidgetPostMessageEventData,
} from "./model";
import {
  checkDeviceAndPageCompabilityForWidget,
  enableControllerDragging,
  generateWidgetUserIDAndStore,
  getUserIDSession,
} from "./utils";
import {
  clearRecording,
  saveScreenRecording,
  startBugTrackingScreenRecording,
  stopBugTrackingScreenRecording,
} from "./utils/screen-recorder";

const crowdOrigin = extensionBaseOriginUrl; // ;
//const crowdOrigin = "https://staging.crowdapp.io";

// const baseURL = "https://staging.crowdapp.io/crowd-extension/unmoderated-test";
const baseURL = widgetBaseUrl; // "http://localhost:2222/unmoderated-test";

export const initCrowdWidget = () => {
  if ((window as any).CrowdApp && (window as any).CrowdApp.crowd_token) {
    const crowd_token = (window as any).CrowdApp.crowd_token;
    const crowdWidgetClass = new SetupCrowdWidget(crowd_token, "crowd-widget");
    crowdWidgetClass.setupWidgetContainer();
  } else {
    console.error(
      "Crowd App installation failed. Please ensure that you are using the correct code snippet"
    );
  }
};

/**
 * @class SetupCrowdWidget
 * @constructor (widgetToken: string)
 *
 * @description The SetupCrowdWidget class provides functionality for creating and embedding crowd widget on client website.
 */
class SetupCrowdWidget {
  // private observer: MutationObserver;
  //** Variable that holds the website integration token and it will be used across the class*/
  private integrationToken: string = "";

  private elementIdPrefix: string = "";

  private isWidgetPanelVisible: boolean = false;

  private shouldHideLauncher: boolean = false;

  private widgetDisplayRules: WidgetDisplayRules | null = null;

  private onTriggerHashString: string = "#crowd-widget";

  private cookieLifetime: number = 0.5; // Hour(s)

  //** Generate IDs for the div container that will be used for the IFrames */
  private widgetContainerId = generateId(`${this.elementIdPrefix}-container`);
  private panelFrameId = generateId(`${this.elementIdPrefix}-body`);
  private launcherFrameId = generateId(`${this.elementIdPrefix}-launcher`);
  private controllerFrameId = generateId(`${this.elementIdPrefix}-controller`);
  private controllerFrameWrapperId = generateId(
    `${this.elementIdPrefix}-controller-wrapper`
  );
  private screenRecordPlayerFrameId = generateId(
    `${this.elementIdPrefix}-record-player-frame`
  );

  widgetParentContainer = null as unknown as HTMLDivElement;

  private iframesLoaded = {
    launcherFrame: false,
    panelFrame: false,
    controllerFrame: false,
  };

  constructor(integrationToken: string, IdPrefix: string) {
    this.integrationToken = integrationToken;
    this.elementIdPrefix = IdPrefix;

    // this.observer = new MutationObserver(
    //   this.handleMutationsObserver.bind(this)
    // );
  }

  /** Return all the iFrame reference  */
  private getWidgetElementsReference() {
    const widgetWrapper = document.getElementById(
      this.widgetContainerId
    ) as HTMLDivElement;
    const panelIframe = document.getElementById(
      this.panelFrameId
    ) as HTMLIFrameElement;
    const launcherIframe = document.getElementById(
      this.launcherFrameId
    ) as HTMLIFrameElement;
    const controllerIframe = document.getElementById(
      this.controllerFrameId
    ) as HTMLIFrameElement;
    const controllerWapper = document.getElementById(
      this.controllerFrameWrapperId
    ) as HTMLIFrameElement;
    const playerFrame = document.getElementById(
      this.screenRecordPlayerFrameId
    ) as HTMLDivElement;
    return {
      widgetWrapper,
      panelIframe,
      launcherIframe,
      controllerWapper,
      controllerIframe,
      playerFrame,
    };
  }

  /**
   * This private method provides the endpoint for each of the iframe containers that will be created
   */
  private getwidgetFrameEndpoint() {
    return {
      panelEndpoint: `${baseURL}?token=${this.integrationToken}&domain=${
        getClientSiteDomain().hostname
      }&origin=${getClientSiteDomain().origin}`,
      launcherEndpoint: `${baseURL}/launcher?token=${
        this.integrationToken
      }&domain=${getClientSiteDomain().hostname}&origin=${
        getClientSiteDomain().origin
      }`,
      controllerEndpoint: `${baseURL}/recorder-controller?domain=${
        getClientSiteDomain().hostname
      }&origin=${getClientSiteDomain().origin}`,
    };
  }

  setupWidgetContainer() {
    //** Setup the necessary containers for the widget  */
    this.widgetParentContainer = document.createElement("div");
    this.widgetParentContainer.classList.add("crowd-widget");
    this.widgetParentContainer.setAttribute("id", this.widgetContainerId);
    this.setupWidgetLauncherElement();
    this.setupWidgetPanelElement();
    this.setupWidgetControllerElement();
    this.setupWidgetRecordPlayerElement();
    document.body.appendChild(this.widgetParentContainer);

    window.addEventListener("message", (event) => {
      if (event.origin !== crowdOrigin) return;
      this.listenAndExecutePostMessageInteration(event);
    });
    this.assignWidgetPanelAndLauncherEndpoints();
    enableControllerDragging(
      this.getWidgetElementsReference().controllerWapper
    );
    this.assignListenerToControlButton();

    /* Listener for monitoring page navigation on the website */
    window.addEventListener(
      "popstate",
      this.triggerWidgetOnLinkHash.bind(this)
    );
  }

  //** Setup the iframe for the widget launcher */
  private setupWidgetLauncherElement() {
    const widgetLauncherIframe = `<iframe id="${this.launcherFrameId}" frameborder="0" class="crowd-widget-launcher-frame" allowtransparency="true" style="height: 0;"></iframe>`;
    this.widgetParentContainer.innerHTML += widgetLauncherIframe;
  }

  //** Setup the iframe for the widget panel */
  private setupWidgetPanelElement() {
    const widgetPanelIframe = `<iframe id="${this.panelFrameId}" frameborder="0" class="crowd-widget-body-frame" allowtransparency="true" style="height: 0; visibility: hidden;"></iframe>`;
    this.widgetParentContainer.innerHTML += widgetPanelIframe;
  }

  //** Setup the iframe for the widget controller basically for the screen recording container */
  private setupWidgetControllerElement() {
    const controllerIframeHtml = `<div id="${this.controllerFrameWrapperId}" class="controller-frame crowd-block" style="visibility: hidden;"><div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
    </svg></div>
    <iframe id="${this.controllerFrameId}" frameborder="0" allowtransparency="true"></iframe></div>`;
    this.widgetParentContainer.innerHTML += controllerIframeHtml;
  }

  //** Setup the div container basically for previewing the screen recording */
  private setupWidgetRecordPlayerElement() {
    const controllerIframeHtml = `<div id="${this.screenRecordPlayerFrameId}" class="record-player-frame" style="visibility: hidden;">
      <div class="player-action">
        <button type="button" id="delete-screen-record">Cancel</button>
        <button type="button" id="save-screen-record">Save video</button>
      </div>
      <div class="crowd-player-container" id="record-player"></div>
    </div>`;
    this.widgetParentContainer.innerHTML += controllerIframeHtml;
  }

  private assignListenerToControlButton() {
    document
      .getElementById("delete-screen-record")
      ?.addEventListener("click", () => {
        clearRecording();
        this.toggleCrowdWidgetControllerVisibility("CLOSEPLAYER");
      });
    document
      .getElementById("save-screen-record")
      ?.addEventListener("click", () => {
        saveScreenRecording(
          crowdOrigin,
          this.getWidgetElementsReference().panelIframe
        );
        this.toggleCrowdWidgetControllerVisibility("CLOSEPLAYER");
      });
  }

  /**
   * @memberof SetupCrowdWidget
   * @method assignWidgetPanelAndLauncherEndpoints
   *  @description This method is responsbile for injecting a url to the widget panel and launcher
   */
  private assignWidgetPanelAndLauncherEndpoints() {
    const elementRefs = this.getWidgetElementsReference();
    if (
      elementRefs.launcherIframe !== null &&
      elementRefs.panelIframe &&
      elementRefs.panelIframe.contentWindow &&
      elementRefs.launcherIframe.contentWindow
    ) {
      elementRefs.launcherIframe.contentWindow.location.href =
        this.getwidgetFrameEndpoint().launcherEndpoint;
      elementRefs.panelIframe.contentWindow.location.href =
        this.getwidgetFrameEndpoint().panelEndpoint;
    }
  }

  /**
   * @memberof SetupCrowdWidget
   * @method assignWidgetControllerEndpoints
   *  @description This method is responsbile for injecting a url to the controller frame
   */
  private assignWidgetControllerEndpoints() {
    const elementRefs = this.getWidgetElementsReference();
    if (
      elementRefs.controllerIframe !== null &&
      elementRefs.controllerIframe.contentWindow
    ) {
      elementRefs.controllerIframe.contentWindow.location.href =
        this.getwidgetFrameEndpoint().controllerEndpoint;
    }
  }

  /**
   * @memberof SetupCrowdWidget
   * @method adjustWidgetLauncherPositionDimension
   * @param action: "Position" | "Resize"
   * @param eventData: { position?: string, height?: number, width?: number}
   *  @description This method is responsbile for setting both the dimension and position of the launcher
   */
  private adjustWidgetLauncherPositionDimension(
    action: "Position" | "Resize",
    eventData: { position?: string; height?: number; width?: number }
  ) {
    const elementRefs = this.getWidgetElementsReference();
    if (action === "Position") {
      elementRefs.launcherIframe.classList.add(
        `widget-launcher-${eventData
          .position!.toLowerCase()
          .split("_")
          .join("-")}`
      );
    } else if (action === "Resize") {
      elementRefs.launcherIframe.style.height = `${eventData.height}px`;
      elementRefs.launcherIframe.style.width = `${eventData.width}px`;
    }
  }

  /**
   * @memberof SetupCrowdWidget
   * @method adjustWidgetPanelPositionDimension
   * @param action: "Position" | "Resize"
   * @param eventData: { position?: string, height?: number, width?: number}
   *  @description This method is responsbile for setting both the dimension and position of the panel
   */
  private adjustWidgetPanelPositionDimension(
    action: "Position" | "Resize",
    eventData: { position?: string; height?: number; width?: number }
  ) {
    const elementRefs = this.getWidgetElementsReference();
    if (action === "Position") {
      elementRefs.panelIframe.classList.add(
        `widget-panel-${eventData.position!.toLowerCase().split("_").join("-")}`
      );
    } else if (action === "Resize") {
      elementRefs.panelIframe.style.height = `${eventData.height}px`;
    }
  }

  private toggleWidgetVisibility() {
    const elementRefs = this.getWidgetElementsReference();
    if (this.isWidgetPanelVisible && !this.shouldHideLauncher) {
      /* Hide the panel and show the launcher when shouldHideLauncher is false */
      elementRefs.panelIframe.style.visibility = "hidden";
      elementRefs.launcherIframe.style.visibility = "visible";
    } else if (this.isWidgetPanelVisible && this.shouldHideLauncher) {
      /* Hide the panel and launcher when shouldHideLauncher is false */
      elementRefs.panelIframe.style.visibility = "hidden";
      elementRefs.launcherIframe.style.visibility = "hidden";
    } else {
      /* Hide the launcher and show the panel */
      elementRefs.panelIframe.style.visibility = "visible";
      elementRefs.launcherIframe.style.visibility = "hidden";
      const postMessageData: StartCountDownEvent = {
        eventType: WidgetEventType.StartCountDown,
        payload: {},
      };
      elementRefs.panelIframe.contentWindow?.postMessage(
        postMessageData,
        crowdOrigin
      );
    }
    this.isWidgetPanelVisible = !this.isWidgetPanelVisible;
  }

  private toggleCrowdWidgetControllerVisibility(
    event: "STARTRECORDING" | "STOPRECORDING" | "CLOSEPLAYER"
  ) {
    const elementRefs = this.getWidgetElementsReference();
    if (event === "STARTRECORDING") {
      elementRefs.panelIframe.style.visibility = "hidden";
      elementRefs.controllerWapper.style.visibility = "visible";
    } else if (event === "STOPRECORDING") {
      document.body.classList.add("show-crowd-player");
      elementRefs.playerFrame.style.visibility = "visible";
      elementRefs.controllerWapper.style.visibility = "hidden";
    } else if (event === "CLOSEPLAYER") {
      document.body.classList.remove("show-crowd-player");
      elementRefs.playerFrame.style.visibility = "hidden";
      elementRefs.panelIframe.style.visibility = "visible";
    }
  }

  /**
   * @memberof SetupCrowdWidget
   * @method checkCompabilityForWidget
   * @description
   *
   */
  private checkCompabilityForWidget() {
    const elementRefs = this.getWidgetElementsReference();

    if (this.widgetDisplayRules === null) return;
    checkDeviceAndPageCompabilityForWidget(this.widgetDisplayRules!).then(
      (response) => {
        if (response && !this.shouldHideLauncher) {
          elementRefs.widgetWrapper.style.visibility = "visible";
          setTimeout(() => {
            this.adjustWidgetLauncherPositionDimension("Position", response);
            if (!getUserIDSession(this.elementIdPrefix)) {
              const postMessageData: WidgetImpressionEvent = {
                eventType: WidgetEventType.WidgetImpression,
                payload: {},
              };
              elementRefs.launcherIframe.contentWindow?.postMessage(
                postMessageData,
                crowdOrigin
              );
            }
          }, response.showAfter);
        } else if (response && this.shouldHideLauncher) {
          // console.log("Hide launcher");
          elementRefs.widgetWrapper.style.visibility = "visible";
          elementRefs.launcherIframe.style.visibility = "hidden";
        } else {
          // this.clearWidgetOnDeactivation();
          elementRefs.widgetWrapper.style.visibility = "hidden";
        }
      }
    );
  }

  /**
   * @memberof SetupCrowdWidget
   * @method listenAndExecutePostMessageInteration
   * @param event: MessageEvent<T>
   *
   */
  private listenAndExecutePostMessageInteration(
    event: MessageEvent<WidgetPostMessageEventData>
  ) {
    if (event.origin !== crowdOrigin) return;

    const elementRefs = this.getWidgetElementsReference();

    switch (event.data.eventType) {
      case WidgetEventType.LauncherLoaded: {
        this.iframesLoaded.launcherFrame = true;
        if (!event.data.payload.showFeedbackWidget) {
          this.clearWidgetOnDeactivation();
          return;
        }
        this.shouldHideLauncher = event.data.payload.hideLauncherButton;
        this.widgetDisplayRules = event.data.payload.displayRules;
        this.checkCompabilityForWidget();
        break;
      }
      case WidgetEventType.LauncherResize: {
        this.adjustWidgetLauncherPositionDimension(
          "Resize",
          event.data.payload
        );
        break;
      }
      case WidgetEventType.ImpressionRecorded: {
        generateWidgetUserIDAndStore(this.elementIdPrefix, this.cookieLifetime);
        break;
      }
      case WidgetEventType.PanelLoaded: {
        this.iframesLoaded.panelFrame = true;
        this.adjustWidgetPanelPositionDimension("Position", event.data.payload);
        this.triggerWidgetOnLinkHash();
        break;
      }
      case WidgetEventType.PanelResize: {
        this.adjustWidgetPanelPositionDimension("Resize", event.data.payload);
        break;
      }
      case WidgetEventType.OpenPanel: {
        this.toggleWidgetVisibility();
        if (
          elementRefs.controllerWapper !== null &&
          !this.iframesLoaded.controllerFrame
        ) {
          this.assignWidgetControllerEndpoints();
          this.iframesLoaded.controllerFrame = true;
        }
        break;
      }
      case WidgetEventType.StartScreenRecord: {
        startBugTrackingScreenRecording();
        this.toggleCrowdWidgetControllerVisibility("STARTRECORDING");
        break;
      }
      case WidgetEventType.StopScreenRecord: {
        stopBugTrackingScreenRecording();
        elementRefs.controllerWapper.style.visibility = "hidden";
        this.toggleCrowdWidgetControllerVisibility("STOPRECORDING");
      }
    }
  }

  /**
   * @memberof SetupCrowdWidget
   * @method triggerWidgetOnLinkHash
   * @description
   *
   */
  private triggerWidgetOnLinkHash() {
    this.checkCompabilityForWidget();
    const hashString = window.location.hash;
    if (hashString !== this.onTriggerHashString && this.isWidgetPanelVisible) {
      this.toggleWidgetVisibility();
    } else if (
      hashString == this.onTriggerHashString &&
      !this.isWidgetPanelVisible
    ) {
      this.toggleWidgetVisibility();
    }
  }

  // private handleMutationsObserver(mutations: MutationRecord[]) {
  //   console.log("Mutation setup");
  //   const bodyElement = document.querySelector("body") as HTMLBodyElement;
  //   for (let _mutation of mutations) {
  //     console.log("Page loaded");
  //     // if (mutation.addedNodes.length) {
  //     //   console.log("New content added");
  //     // }
  //   }
  //   this.observer.observe(bodyElement, {
  //     childList: true,
  //     subtree: true,
  //   });
  // }

  clearWidgetOnDeactivation() {
    this.widgetParentContainer.remove();
  }
}
