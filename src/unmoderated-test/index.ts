/**
 *  @author Crowd App
 *
 *  @class SetUpUnModeratedTestPrompt
 */

import { generateId, getClientSiteDomain } from "../utils";
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

const crowdOrigin = "http://localhost:2222"; // "https://staging.crowdapp.io";

// const baseURL = "https://staging.crowdapp.io/crowd-extension/unmoderated-test";
const baseURL = "http://localhost:2222/crowd-extension/unmoderated-test";

export const initCrowdPrompt = () => {
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

// const crowdTrack = ()=> {
//   //get the current document link
//   let old_href_link_crowd = document.location.href;
//   const child_body_crowd = document.querySelector('body');
//   const observer_crowd = new MutationObserver(mutations => {
//     if(old_href_link_crowd !== document.location.href){
//       old_href_link_crowd = document.location.href;
//       const obj_crowd = JSON.parse(JSON.stringify(old_href_link_crowd));
//       parent.postMessage(obj_crowd, 'https://staging.crowdapp.io', )
//     }
//   })
//   observer_crowd.observe(child_body_crowd, { childList: true, subtree: true});
// }
// window.onload = crowdTrack;

// const trackPageNavigation = () => {

//   const bodyElement = document.querySelector('body') as HTMLBodyElement
//   const handleMutationObservers = (mutations: MutationRecord[]) => {
//     mutations.forEach(item => {
//       item.
//     })
//   }
//   const observer = new MutationObserver(handleMutationObservers.bind(this))

//   observer.observe(bodyElement, {
//     subtree: true,
//     childList: true,
//   })
// }

export class SetUpUnModeratedTestPrompt {
  private observer: MutationObserver;
  //** Variable that holds the website integration token and it will be used across the class*/
  private integrationToken: string = "";

  private elementIdPrefix: string = "";

  private deviceIncompatiblePrompt: string[] = [];
  //** This class variable holds the currently displayed unmoderated test  */
  private currentlyDisplayedUnmoderatedTest: PromptDisplayRule | null = null;

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
    const panelIframe = document.getElementById(
      this.promptPanelFrameId
    ) as HTMLIFrameElement;

    return {
      panelIframe,
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
    };
  }

  private handleMutationsObserver(mutations: MutationRecord[]) {
    const bodyElement = document.querySelector("body") as HTMLBodyElement;
    for (let mutation of mutations) {
      console.log("Page loaded");
      if (mutation.addedNodes.length) {
        console.log("New content added");
      }
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
  }

  /**
   * @memberof SetUpUnModeratedTestPrompt
   * @method handlePostMessageEvent
   * @param event: MessageEvent<T>
   *
   */
  private handlePostMessageEvent(event: MessageEvent<PostMessageEventData>) {
    if (event.origin !== crowdOrigin) return;
    this.listenAndExecutePostMessageInteration(event);
  }

  /**
   * @memberof SetUpUnModeratedTestPrompt
   * @method setupPromptPanelElement
   *
   * @description Setup the iframe for the prompt panel
   */
  private setupPromptPanelElement() {
    const promptPanelIframe = `<iframe id="${this.promptPanelFrameId}" frameborder="0" class="prompt-body-frame" allowtransparency="true" style="height: 0;"></iframe>`;
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
    } else if (action === "Resize") {
      elementRefs.panelIframe.style.height = `${eventData.height}px`;
      elementRefs.panelIframe.style.width = `${eventData.width}px`;
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

  private listenAndExecutePostMessageInteration(
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
        checkDeviceAndPageCompability(event.data.payload).then((response) => {
          if (response) {
            this.currentlyDisplayedUnmoderatedTest = event.data
              .payload as PromptDisplayRule;
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
              (event.data.payload as PromptDisplayRule).id
            );
            this.sendPaginationEventRequest(elementRefs.panelIframe);
            // this.clearPromptOnDeactivation();
          }
        });
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
