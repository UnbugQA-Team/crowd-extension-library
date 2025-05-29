import store from "../../store";

import { extensionBaseOriginUrl } from "../../utils";
import {
  answeredCrowdUnmoderatedTestName,
  CrowdPromptIdPrefix,
} from "../../constant";
import {
  checkDeviceAndPageCompatibility,
  getAllIgnoredUnmoderatedTestId,
  getPeriodToReshowPrompt,
  getStoredUnmoderatedTestId,
  storeIgnoredUnmoderatedTestId,
  storeUnmoderatedTestId,
  userTestPromptElementsReferences,
  userTestPromptFrameEndpoint,
} from "./utils";
import {
  EventType,
  GetPromptSizeEvent,
  PostMessageEventData,
  PromptAccessedIdsEvent,
  PromptDisplayRule,
  PromptNextUnmoderatedTestEvent,
} from "../../model/userTest-prompt";

const crowdOrigin = extensionBaseOriginUrl;

export class SetUpUnModeratedTestPrompt {
  private observer: MutationObserver;
  private integrationToken: string = "";

  private deviceIncompatiblePrompt: string[] = [];
  //** This class variable holds the currently displayed unmoderated test  */
  private currentlyDisplayedUnmoderatedTest: PromptDisplayRule | null = null;

  // //** Generate IDs for the div container that will be used to enclose IFrames */
  // private promptPanelContainerFrameId = ''

  // //** Generate IDs for the div container that will be used for the IFrames */
  // private promptPanelFrameId = ''

  promptParentContainer = null as unknown as HTMLDivElement;

  private setupPromptPanelElement() {
    const promptPanelIframe = `<div id="${
      store.modules.userTestPrompt.state.userTestPromptContainerState[
        this.integrationToken
      ].promptContainerId
    }" class="prompt-body-frame" style="height: 0; visibility: hidden;"> <button type="button" id="${
      store.modules.userTestPrompt.state.userTestPromptContainerState[
        this.integrationToken
      ].panelCloseButtonId
    }" class="close-prompt-panel-btn"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 12L12 4M4 4L12 12" stroke="#F9FAFB" stroke-width="1.13" stroke-linecap="round" stroke-linejoin="round"/>
    </svg></button><iframe id="${
      store.modules.userTestPrompt.state.userTestPromptContainerState[
        this.integrationToken
      ].panelFrameWrapperId
    }" frameborder="0" class="prompt-body-iframe" allowtransparency="true" style="height: 0;"></iframe></div>`;
    return promptPanelIframe;
  }

  private addListenerForPanelCloseBtn() {
    document
      .getElementById(
        store.modules.userTestPrompt.state.userTestPromptContainerState[
          this.integrationToken
        ].panelCloseButtonId
      )
      ?.addEventListener("click", () => {
        this.onCloseOrIgnorePromptAction();
      });
  }

  private onCloseOrIgnorePromptAction() {
    storeIgnoredUnmoderatedTestId(
      this.currentlyDisplayedUnmoderatedTest!.id,
      getPeriodToReshowPrompt(
        this.currentlyDisplayedUnmoderatedTest!.reshowPrompt
      )
    );
    this.sendPaginationEventRequest(
      userTestPromptElementsReferences(this.integrationToken).panelIframe
    );
  }

  /**
   * @memberof SetUpUnModeratedTestPrompt
   * @method assignPromptPanelEndpoints
   *
   * @description Assigns the panel endpoint to the iframe element.
   * @param {string} integrationToken - The integration token used to generate the endpoints.
   * @return {void}
   */
  private assignPromptPanelEndpoints() {
    const elementRefs = userTestPromptElementsReferences(this.integrationToken);
    const { panelEndpoint } = userTestPromptFrameEndpoint(
      this.integrationToken
    );
    if (elementRefs.panelIframe && elementRefs.panelIframe.contentWindow) {
      elementRefs.panelIframe.contentWindow.location.href = panelEndpoint;
    }
  }

  constructor(integrationToken: string) {
    this.integrationToken = integrationToken;
    store.modules.userTestPrompt.action.createInitialPrompt(
      this.integrationToken
    );
    this.observer = new MutationObserver(
      this.handleMutationsObserver.bind(this)
    );
  }

  setupWidgetContainer() {
    store.modules.userTestPrompt.action.generateElementIds(
      this.integrationToken,
      CrowdPromptIdPrefix
    );
    this.promptParentContainer = document.createElement("div");
    this.promptParentContainer.classList.add("crowd-prompt");
    this.promptParentContainer.setAttribute(
      "id",
      store.modules.userTestPrompt.state.userTestPromptContainerState[
        this.integrationToken
      ].promptParentContainerId
    );
    this.promptParentContainer.innerHTML += this.setupPromptPanelElement();
    document.body.appendChild(this.promptParentContainer);

    this.assignPromptPanelEndpoints();
    this.addListenerForPanelCloseBtn();

    window.addEventListener("message", (event) => {
      if (event.origin !== crowdOrigin) return;
      this.listenAndExecutePostMessageInteraction(event);
    });

    /* Listener for monitoring page navigation on the website */
    window.addEventListener(
      "popstate",
      this.triggerPromptOnLinkHash.bind(this)
    );
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
    const elementRefs = userTestPromptElementsReferences(this.integrationToken);
    if (action === "Position") {
      elementRefs.panelIframe.classList.add(
        `prompt-panel-${eventData.position.toLowerCase().split("_").join("-")}`
      );
      elementRefs.panelContainerElement.classList.add(
        `prompt-panel-container-${eventData.position
          .toLowerCase()
          .split("_")
          .join("-")}`
      );
    } else if (action === "Resize") {
      elementRefs.panelIframe.style.height = `${eventData.height}px`;
      elementRefs.panelIframe.style.width = `${eventData.width}px`;
      elementRefs.panelContainerElement.style.height = `${eventData.height}px`;
      elementRefs.panelContainerElement.style.width = `${eventData.width}px`;
      elementRefs.panelContainerElement.style.visibility = "visible";
    }
  }

  private sendDisplayedUnmoderatedTestIds(promptIframe: HTMLIFrameElement) {
    const postMessageData: PromptAccessedIdsEvent = {
      eventType: EventType.LastPromptUnmoderatedId,
      payload: {
        ignoredTestIds: getAllIgnoredUnmoderatedTestId(),
        answeredTestIds: getStoredUnmoderatedTestId(
          answeredCrowdUnmoderatedTestName
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
   * @method checkCompatibilityForPrompt
   * @description
   *
   */
  private checkCompatibilityForPrompt() {
    const elementRefs = userTestPromptElementsReferences(this.integrationToken);

    if (this.currentlyDisplayedUnmoderatedTest === null) return;
    checkDeviceAndPageCompatibility(
      this.currentlyDisplayedUnmoderatedTest!
    ).then((response) => {
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
    });
  }

  private listenAndExecutePostMessageInteraction(
    event: MessageEvent<PostMessageEventData>
  ) {
    const elementRefs = userTestPromptElementsReferences(this.integrationToken);
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
        this.checkCompatibilityForPrompt();
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
            answeredCrowdUnmoderatedTestName
          );

          if (this.currentlyDisplayedUnmoderatedTest?.id !== undefined) {
            lastSessionIds.push(this.currentlyDisplayedUnmoderatedTest?.id);
            storeUnmoderatedTestId(
              answeredCrowdUnmoderatedTestName,
              lastSessionIds,
              30
            );
            this.sendPaginationEventRequest(elementRefs.panelIframe);
          }
        } else if (
          event.data.payload.onCloseAction === "IGNORE" &&
          this.currentlyDisplayedUnmoderatedTest?.id !== undefined
        ) {
          this.onCloseOrIgnorePromptAction();
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
      this.checkCompatibilityForPrompt();
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
