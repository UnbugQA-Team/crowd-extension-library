(function(){"use strict";try{if(typeof document<"u"){var t=document.createElement("style");t.id="crowd-app-io-77.06667871405139",t.appendChild(document.createTextNode(".crowd-prompt{position:fixed}.crowd-prompt iframe{z-index:1100;background-color:transparent!important;background:transparent!important;border:none}.crowd-prompt .prompt-body-frame{width:470px;background:transparent;position:fixed;box-shadow:#00000029 0 5px 5px;-webkit-box-shadow:rgba(0,0,0,.16) 0px 5px 5px;-moz-box-shadow:rgba(0,0,0,.16) 0px 5px 6px;border-radius:10px}@media (max-width: 600px){.crowd-prompt .prompt-body-frame{width:100%!important}}.prompt-body-frame.prompt-panel-bottom-right{position:fixed;right:10px;bottom:10px}.prompt-body-frame.prompt-panel-bottom-left{position:fixed;left:10px;bottom:10px}.prompt-body-frame.prompt-panel-middle-left{position:fixed;left:-2px;top:50%;transform:translate(-50%) rotate(-90deg);transform-origin:50% 0%}.prompt-body-frame.prompt-panel-middle-right{position:fixed;top:50%;right:0;transform:rotate(-90deg) translate(50%,-50%);transform-origin:100% 50%}@media (max-width: 600px){.prompt-body-frame.prompt-panel-bottom-right{right:0;bottom:0}.prompt-body-frame.prompt-panel-bottom-left{left:0;bottom:0}.prompt-body-frame.prompt-panel-middle-left{left:0;transform:translateY(0);top:auto!important;bottom:0}.prompt-body-frame.prompt-panel-middle-right{right:0;transform:translateY(0);top:auto!important;bottom:0}}")),document.head.appendChild(t)}}catch(o){console.error("vite-plugin-css-injected-by-js",o)}})();
var f = Object.defineProperty;
var T = (t, e, o) => e in t ? f(t, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : t[e] = o;
var a = (t, e, o) => (T(t, typeof e != "symbol" ? e + "" : e, o), o);
const y = (t) => `${t}-${(/* @__PURE__ */ new Date()).getTime()}${Math.floor(Math.random() * 100)}`, h = () => {
  const t = window.location.href, e = new URL(t);
  return {
    hostname: e.hostname,
    origin: e.origin
  };
}, E = () => {
  const t = navigator.userAgent;
  return /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(t) ? "Mobile" : /Tablet|iPad/i.test(t) ? "Tablet" : "Desktop";
}, u = [
  { label: "Do not reshow", value: "0_hours" },
  { label: "Reshow after 24 hours", value: "24_hours" },
  { label: "Reshow after 3 days", value: "72_hours" },
  { label: "Reshow after 1 week", value: "168_hours" }
];
var r = /* @__PURE__ */ ((t) => (t.PromptLoaded = "PROMPTLOADED", t.GetPromptSize = "GETPROMPTSIZE", t.PromptResize = "PROMPTRESIZE", t.LastPromptUnmoderatedId = "LASTPROMPTUNMODERATEDID", t.RemovePrompt = "REMOVEPROMPT", t.CheckDeviceCompatibility = "CHECKDEVICECOMPATIBILITY", t.PaginateUnmoderatedTest = "PAGINATEUNMODERATEDTEST", t.StoreUserTestId = "STOREMODERATEDTESTID", t))(r || {});
const w = "crowd-ignored-unmoderated-test", p = "crowd-answered-unmoderated-test", C = (t, e, o) => {
  const n = /* @__PURE__ */ new Date();
  n.setTime(
    n.getTime() + o * 24 * 60 * 60 * 1e3
  );
  const s = `${t}=${encodeURIComponent(
    JSON.stringify(e)
  )}; expires=${n.toUTCString()}; path=/`;
  document.cookie = s;
}, P = (t) => {
  const o = document.cookie.split(";");
  let n = null;
  return o.forEach((s) => {
    const [d, l] = s.trim().split("=");
    d === t && (n = JSON.parse(decodeURIComponent(l)));
  }), n === null ? [] : n;
}, D = (t, e) => {
  const o = `${w}-${(/* @__PURE__ */ new Date()).getTime()}`, n = /* @__PURE__ */ new Date();
  n.setTime(
    n.getTime() + e * 24 * 60 * 60 * 1e3
  );
  const s = `${o}=${encodeURIComponent(
    t
  )}; expires=${n.toUTCString()}; path=/`;
  document.cookie = s;
}, R = () => {
  const t = new RegExp(`^${w}`), o = document.cookie.split(";"), n = [];
  for (let s of o) {
    const [d, l] = s.split("=").map((i) => i.trim());
    t.test(d) && n.push(l);
  }
  return n;
}, g = (t) => {
  const e = u.findIndex(
    (o) => o.value === t
  );
  if (e !== 1) {
    const n = u[e].value.split("_")[0];
    return Number(n) === 0 ? 180 : Number(n) / 24;
  } else
    return 180;
}, b = (t, e) => {
  const o = window.location.href.replace(/\/$/, "");
  return console.log(o), t === "start_with" ? o.startsWith(e) : t === "end_with" ? o.endsWith(e) : t === "contains" ? o.includes(e) : t === "exactly_matches" ? o === e : t === "is_not" ? o !== e : t === "matches_regex" ? new RegExp(e, "i").test(o) : !1;
}, k = (t) => {
  const e = E();
  return e === "Mobile" && t.mobile || e === "Desktop" && t.desktop || e === "Tablet" && t.tablet;
}, U = async (t) => {
  if (t.visibilityOption === "ALLPAGES")
    return {
      position: t.promptPosition
    };
  if (t.visibilityOption === "SPECIFICPAGES") {
    const e = t.targetPages.filter(
      (o) => b(o.optionName, o.optionValue)
    );
    return console.log(e), k(t.deviceSupported) && e.length > 0 ? {
      position: t.promptPosition
    } : !1;
  } else
    return !1;
}, m = "http://localhost:2222", M = "http://localhost:2222/crowd-extension/unmoderated-test", A = () => {
  if (window.CrowdApp && window.CrowdApp.crowd_token) {
    const t = window.CrowdApp.crowd_token;
    new v(
      t,
      "prompt"
    ).setupWidgetContainer();
  } else
    console.error(
      "Crowd App installation failed. Please ensure that you are using the correct code snippet"
    );
};
class v {
  constructor(e, o) {
    //** Variable that holds the website integration token and it will be used across the class*/
    a(this, "integrationToken", "");
    a(this, "elementIdPrefix", "");
    a(this, "deviceIncompatiblePrompt", []);
    //** This class variable holds the currently displayed unmoderated test  */
    a(this, "currentlyDisplayedUnmoderatedTest", null);
    //** Generate IDs for the div container that will be used for the IFrames */
    a(this, "promptPanelFrameId", y(`${this.elementIdPrefix}-body`));
    a(this, "promptParentContainer", null);
    this.integrationToken = e, this.elementIdPrefix = o;
  }
  /** Return all the iFrame reference  */
  getPromptElementsReference() {
    return {
      panelIframe: document.getElementById(
        this.promptPanelFrameId
      )
    };
  }
  /**
   * This private method provides the endpoint for each of the iframe containers that will be created
   */
  getwidgetFrameEndpoint() {
    return {
      panelEndpoint: `${M}?token=${this.integrationToken}&domain=${h().hostname}&origin=${h().origin}`
    };
  }
  setupWidgetContainer() {
    this.promptParentContainer = document.createElement("div"), this.promptParentContainer.classList.add("crowd-prompt"), this.setupPromptPanelElement(), document.body.appendChild(this.promptParentContainer), window.addEventListener("message", this.handlePostMessageEvent.bind(this)), this.assignPromptPanelEndpoints();
  }
  /**
   * @memberof SetUpUnModeratedTestPrompt
   * @method handlePostMessageEvent
   * @param event: MessageEvent<T>
   *
   */
  handlePostMessageEvent(e) {
    e.origin === m && this.listenAndExecutePostMessageInteration(e);
  }
  /**
   * @memberof SetUpUnModeratedTestPrompt
   * @method setupPromptPanelElement
   *
   * @description Setup the iframe for the prompt panel
   */
  setupPromptPanelElement() {
    const e = `<iframe id="${this.promptPanelFrameId}" frameborder="0" class="prompt-body-frame" allowtransparency="true" style="height: 0;"></iframe>`;
    this.promptParentContainer.innerHTML += e;
  }
  /**
   * @memberof SetUpUnModeratedTestPrompt
   * @method assignPromptPanelEndpoints
   *
   * @description Assign endpoint to each of the iFrame created
   */
  assignPromptPanelEndpoints() {
    const e = this.getPromptElementsReference();
    e.panelIframe && e.panelIframe.contentWindow && (e.panelIframe.contentWindow.location.href = this.getwidgetFrameEndpoint().panelEndpoint);
  }
  /**
   * @memberof SetUpUnModeratedTestPrompt
   * @method adjustPromptPanelPositionDimension
   *
   * @description Adjust the prompt panel iframe via position or resize to the size
   */
  adjustPromptPanelPositionDimension(e, o) {
    const n = this.getPromptElementsReference();
    e === "Position" ? n.panelIframe.classList.add(
      `prompt-panel-${o.position.toLowerCase().split("_").join("-")}`
    ) : e === "Resize" && (n.panelIframe.style.height = `${o.height}px`, n.panelIframe.style.width = `${o.width}px`);
  }
  sendDisplayedUnmoderatedTestIds(e) {
    var n;
    const o = {
      eventType: r.LastPromptUnmoderatedId,
      payload: {
        ignoredTestIds: R(),
        answeredTestIds: P(
          p
        ),
        incompatibleTestIds: this.deviceIncompatiblePrompt
      }
    };
    (n = e.contentWindow) == null || n.postMessage(o, m);
  }
  sendPaginationEventRequest(e) {
    var n;
    const o = {
      eventType: r.PaginateUnmoderatedTest,
      payload: {}
    };
    (n = e.contentWindow) == null || n.postMessage(o, m);
  }
  listenAndExecutePostMessageInteration(e) {
    var n, s, d, l;
    const o = this.getPromptElementsReference();
    switch (e.data.eventType) {
      case r.PromptLoaded: {
        e.data.payload.showPrompt ? this.sendDisplayedUnmoderatedTestIds(o.panelIframe) : this.clearPromptOnDeactivation();
        break;
      }
      case r.CheckDeviceCompatibility: {
        U(e.data.payload).then((i) => {
          var c;
          if (i) {
            this.currentlyDisplayedUnmoderatedTest = e.data.payload, this.adjustPromptPanelPositionDimension("Position", i);
            const I = {
              eventType: r.GetPromptSize,
              payload: {}
            };
            (c = o.panelIframe.contentWindow) == null || c.postMessage(
              I,
              m
            );
          } else
            this.deviceIncompatiblePrompt.push(
              e.data.payload.id
            ), this.sendPaginationEventRequest(o.panelIframe);
        });
        break;
      }
      case r.PromptResize: {
        this.adjustPromptPanelPositionDimension("Resize", e.data.payload);
        break;
      }
      case r.RemovePrompt: {
        this.clearPromptOnDeactivation();
        break;
      }
      case r.StoreUserTestId:
        if (e.data.payload.onCloseAction === "ANSWER") {
          const i = P(
            p
          );
          ((n = this.currentlyDisplayedUnmoderatedTest) == null ? void 0 : n.id) !== void 0 && (i.push((s = this.currentlyDisplayedUnmoderatedTest) == null ? void 0 : s.id), C(
            p,
            i,
            30
          ), this.sendPaginationEventRequest(o.panelIframe));
        } else
          e.data.payload.onCloseAction === "IGNORE" && ((d = this.currentlyDisplayedUnmoderatedTest) == null ? void 0 : d.id) !== void 0 && (console.log(
            g(
              this.currentlyDisplayedUnmoderatedTest.reshowPrompt
            )
          ), D(
            (l = this.currentlyDisplayedUnmoderatedTest) == null ? void 0 : l.id,
            g(
              this.currentlyDisplayedUnmoderatedTest.reshowPrompt
            )
          ), this.sendPaginationEventRequest(o.panelIframe));
    }
  }
  /**
   * @memberof SetUpUnModeratedTestPrompt
   * @method clearPromptOnDeactivation
   *
   * @description This method clear the prompt parent container if there is a need to deactivate
   *  prompt for the host website
   */
  clearPromptOnDeactivation() {
    this.promptParentContainer && this.promptParentContainer.remove();
  }
}
A();
