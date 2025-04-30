/**
 *  @author Crowd App
 *
 *  @class SetUpUnModeratedTestPrompt
 */

import {
  extensionBaseOriginUrl,
  generateId,
  unmoderatedTestBaseUrl,
  urlPathQuery,
} from "../utils";
import {
  EventType,
  GetPromptSizeEvent,
  PostMessageEventData,
  PromptAccessedIdsEvent,
  PromptDisplayRule,
  PromptNextUnmoderatedTestEvent,
} from "./model";
import {
  answeredCrowdUmoderatedTestName,
  checkDeviceAndPageCompability,
  getAllIgnoredUnmoderatedTestId,
  getPeriodToReshowPrompt,
  getStoredUnmoderatedTestId,
  storeIgnoredUnmoderatedTestId,
  storeUnmoderatedTestId,
} from "./utils";

const crowdOrigin = extensionBaseOriginUrl; // ;
//const crowdOrigin = "https://staging.crowdapp.io";

// const baseURL = "https://staging.crowdapp.io/crowd-extension/unmoderated-test";
const baseURL = unmoderatedTestBaseUrl; // "http://localhost:2222/unmoderated-test";

export const initCrowdPrompt = () => {
  const doContainerExist = document.getElementsByClassName("crowd-prompt");
  if (doContainerExist.length) return;
  if ((window as any).CrowdApp && (window as any).CrowdApp.crowd_token) {
    const crowd_token = (window as any).CrowdApp.crowd_token;
    const crowdWidgetClass = new SetUpUnModeratedTestPrompt(
      crowd_token,
      "prompt"
    );
    crowdWidgetClass.setupWidgetContainer();
  } else {
    console.error(
      "Crowd App installation failed. Please ensure that you are using the correct code snippet"
    );
  }
};

export class SetUpUnModeratedTestPrompt {
  private observer: MutationObserver;
  //** Variable that holds the website integration token and it will be used across the class*/
  private integrationToken: string = "";

  private elementIdPrefix: string = "";

  private deviceIncompatiblePrompt: string[] = [];
  //** This class variable holds the currently displayed unmoderated test  */
  private currentlyDisplayedUnmoderatedTest: PromptDisplayRule | null = null;

  //** Generate IDs for the div container that will be used to enclose IFrames */
  private promptPanelContainerFrameId = generateId(
    `${this.elementIdPrefix}-body-container`
  );

  //** Generate IDs for the div container that will be used for the IFrames */
  private promptPanelFrameId = generateId(`${this.elementIdPrefix}-body`);

  promptParentContainer = null as unknown as HTMLDivElement;

  constructor(integrationToken: string, IdPrefix: string) {
    this.integrationToken = integrationToken;
    this.elementIdPrefix = IdPrefix;

    this.observer = new MutationObserver(
      this.handleMutationsObserver.bind(this)
    );
  }

  /** Return all the iFrame reference  */
  private getPromptElementsReference() {
    const panelContainer = document.getElementById(
      this.promptPanelContainerFrameId
    ) as HTMLDivElement;
    const panelIframe = document.getElementById(
      this.promptPanelFrameId
    ) as HTMLIFrameElement;

    return {
      panelContainer,
      panelIframe,
    };
  }

  /**
   * This private method provides the endpoint for each of the iframe containers that will be created
   */
  private getwidgetFrameEndpoint() {
    return {
      panelEndpoint: `${baseURL}/${urlPathQuery(this.integrationToken)}`,
    };
  }

  private handleMutationsObserver(mutations: MutationRecord[]) {
    const bodyElement = document.querySelector("body") as HTMLBodyElement;
    for (let _mutation of mutations) {
      // console.log("Page loaded");
      // if (mutation.addedNodes.length) {
      //   console.log("New content added");
      // }
    }
    this.observer.observe(bodyElement, {
      childList: true,
      subtree: true,
    });
  }

  setupWidgetContainer() {
    this.promptParentContainer = document.createElement("div");
    this.promptParentContainer.classList.add("crowd-prompt");
    this.setupPromptPanelElement();
    document.body.appendChild(this.promptParentContainer);
    window.addEventListener("message", this.handlePostMessageEvent.bind(this));
    this.assignPromptPanelEndpoints();

    document
      .getElementById("close-prompt-panel-btn")
      ?.addEventListener("click", () => {
        storeIgnoredUnmoderatedTestId(
          this.currentlyDisplayedUnmoderatedTest!.id,
          getPeriodToReshowPrompt(
            this.currentlyDisplayedUnmoderatedTest!.reshowPrompt
          )
        );
        this.sendPaginationEventRequest(
          this.getPromptElementsReference().panelIframe
        );
      });

    /* Listener for monitoring page navigation on the website */
    window.addEventListener(
      "popstate",
      this.triggerPromptOnLinkHash.bind(this)
    );
  }

  /**
   * @memberof SetUpUnModeratedTestPrompt
   * @method handlePostMessageEvent
   * @param event: MessageEvent<T>
   *
   */
  private handlePostMessageEvent(event: MessageEvent<PostMessageEventData>) {
    if (event.origin !== crowdOrigin) return;
    this.listenAndExecutePostMessageInteraction(event);
  }

  /**
   * @memberof SetUpUnModeratedTestPrompt
   * @method setupPromptPanelElement
   *
   * @description Setup the iframe for the prompt panel
   */
  private setupPromptPanelElement() {
    const promptPanelIframe = `<div id="${this.promptPanelContainerFrameId}" class="prompt-body-frame" style="height: 0; visibility: hidden;"> <button type="button" id="close-prompt-panel-btn" class="close-prompt-panel-btn"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 12L12 4M4 4L12 12" stroke="#F9FAFB" stroke-width="1.13" stroke-linecap="round" stroke-linejoin="round"/>
    </svg></button><iframe id="${this.promptPanelFrameId}" frameborder="0" class="prompt-body-iframe" allowtransparency="true" style="height: 0;"></iframe></div>`;
    this.promptParentContainer.innerHTML += promptPanelIframe;
  }

  /**
   * @memberof SetUpUnModeratedTestPrompt
   * @method assignPromptPanelEndpoints
   *
   * @description Assign endpoint to each of the iFrame created
   */
  private assignPromptPanelEndpoints() {
    const elementRefs = this.getPromptElementsReference();
    if (elementRefs.panelIframe && elementRefs.panelIframe.contentWindow) {
      elementRefs.panelIframe.contentWindow.location.href =
        this.getwidgetFrameEndpoint().panelEndpoint;
    }
  }

  /**
   * @memberof SetUpUnModeratedTestPrompt
   * @method adjustPromptPanelPositionDimension
   *
   * @description Adjust the prompt panel iframe via position or resize to the size
   */
  private adjustPromptPanelPositionDimension(
    action: "Position" | "Resize",
    eventData: any
  ) {
    const elementRefs = this.getPromptElementsReference();
    if (action === "Position") {
      elementRefs.panelIframe.classList.add(
        `prompt-panel-${eventData.position.toLowerCase().split("_").join("-")}`
      );
      elementRefs.panelContainer.classList.add(
        `prompt-panel-container-${eventData.position
          .toLowerCase()
          .split("_")
          .join("-")}`
      );
    } else if (action === "Resize") {
      elementRefs.panelIframe.style.height = `${eventData.height}px`;
      elementRefs.panelIframe.style.width = `${eventData.width}px`;
      elementRefs.panelContainer.style.height = `${eventData.height}px`;
      elementRefs.panelContainer.style.width = `${eventData.width}px`;
      elementRefs.panelContainer.style.visibility = "visible";
    }
  }

  private sendDisplayedUnmoderatedTestIds(promptIframe: HTMLIFrameElement) {
    const postMessageData: PromptAccessedIdsEvent = {
      eventType: EventType.LastPromptUnmoderatedId,
      payload: {
        ignoredTestIds: getAllIgnoredUnmoderatedTestId(),
        answeredTestIds: getStoredUnmoderatedTestId(
          answeredCrowdUmoderatedTestName
        ),
        incompatibleTestIds: this.deviceIncompatiblePrompt,
      },
    };
    promptIframe.contentWindow?.postMessage(postMessageData, crowdOrigin);
  }

  private sendPaginationEventRequest(promptIframe: HTMLIFrameElement) {
    const postMessageData: PromptNextUnmoderatedTestEvent = {
      eventType: EventType.PaginateUnmoderatedTest,
      payload: {},
    };
    promptIframe.contentWindow?.postMessage(postMessageData, crowdOrigin);
  }

  /**
   * @memberof SetUpUnModeratedTestPrompt
   * @method checkCompabilityForPrompt
   * @description
   *
   */
  private checkCompabilityForPrompt() {
    const elementRefs = this.getPromptElementsReference();

    if (this.currentlyDisplayedUnmoderatedTest === null) return;
    checkDeviceAndPageCompability(this.currentlyDisplayedUnmoderatedTest!).then(
      (response) => {
        if (response) {
          // this.currentlyDisplayedUnmoderatedTest = event.data.payload as PromptDisplayRule;
          this.adjustPromptPanelPositionDimension("Position", response);
          const postMessageData: GetPromptSizeEvent = {
            eventType: EventType.GetPromptSize,
            payload: {},
          };
          elementRefs.panelIframe.contentWindow?.postMessage(
            postMessageData,
            crowdOrigin
          );
        } else {
          this.deviceIncompatiblePrompt.push(
            this.currentlyDisplayedUnmoderatedTest!.id
          );
          this.sendPaginationEventRequest(elementRefs.panelIframe);
          // this.clearPromptOnDeactivation();
        }
      }
    );
  }

  private listenAndExecutePostMessageInteraction(
    event: MessageEvent<PostMessageEventData>
  ) {
    const elementRefs = this.getPromptElementsReference();
    switch (event.data.eventType) {
      case EventType.PromptLoaded: {
        if (!event.data.payload.showPrompt) {
          this.clearPromptOnDeactivation();
        } else {
          this.sendDisplayedUnmoderatedTestIds(elementRefs.panelIframe);
        }
        break;
      }
      case EventType.CheckDeviceCompatibility: {
        this.currentlyDisplayedUnmoderatedTest = event.data.payload;
        this.checkCompabilityForPrompt();
        break;
      }
      case EventType.PromptResize: {
        this.adjustPromptPanelPositionDimension("Resize", event.data.payload);
        break;
      }
      case EventType.RemovePrompt: {
        this.clearPromptOnDeactivation();
        break;
      }
      case EventType.StoreUserTestId: {
        if (event.data.payload.onCloseAction === "ANSWER") {
          const lastSessionIds = getStoredUnmoderatedTestId(
            answeredCrowdUmoderatedTestName
          );

          if (this.currentlyDisplayedUnmoderatedTest?.id !== undefined) {
            lastSessionIds.push(this.currentlyDisplayedUnmoderatedTest?.id);
            storeUnmoderatedTestId(
              answeredCrowdUmoderatedTestName,
              lastSessionIds,
              30
            );
            this.sendPaginationEventRequest(elementRefs.panelIframe);
          }
        } else if (
          event.data.payload.onCloseAction === "IGNORE" &&
          this.currentlyDisplayedUnmoderatedTest?.id !== undefined
        ) {
          storeIgnoredUnmoderatedTestId(
            this.currentlyDisplayedUnmoderatedTest?.id,
            getPeriodToReshowPrompt(
              this.currentlyDisplayedUnmoderatedTest.reshowPrompt
            )
          );
          this.sendPaginationEventRequest(elementRefs.panelIframe);
        }
      }
    }
  }

  /**
   * @memberof SetUpUnModeratedTestPrompt
   * @method triggerPromptOnLinkHash
   * @description
   *
   */
  private triggerPromptOnLinkHash() {
    try {
      this.checkCompabilityForPrompt();
    } catch {
      window.removeEventListener(
        "popstate",
        this.triggerPromptOnLinkHash.bind(this)
      );
    }
  }

  /**
   * @memberof SetUpUnModeratedTestPrompt
   * @method clearPromptOnDeactivation
   *
   * @description This method clear the prompt parent container if there is a need to deactivate
   *  prompt for the host website
   */
  private clearPromptOnDeactivation() {
    if (this.promptParentContainer) {
      this.promptParentContainer.remove();
    }
  }
}
