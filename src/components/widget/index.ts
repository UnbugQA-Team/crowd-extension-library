import {
  WidgetEventType,
  WidgetPostMessageEventData,
} from "../../model/widget";
import store from "../../store";
import { extensionBaseOriginUrl } from "../../utils";
import { CrowdElementIdPrefix } from "./constant";
import {
  adjustWidgetLauncherPositionDimension,
  LauncherFrame,
} from "./launcher";
import {
  addListenerForPanelCloseBtn,
  adjustWidgetPanelPositionDimension,
  WidgetPanelElement,
} from "./panel";
import { triggerWidgetOnLinkHash } from "./registred-listener";
import {
  assignListenerToControlButton,
  RecorderControllerElement,
  RecorderPreviewElement,
} from "./screen-recoder";
import {
  checkCompabilityForWidget,
  enableControllerDragging,
  widgetElementsReferences,
  widgetFrameEndpoint,
} from "./utils";
import {
  startBugTrackingScreenRecording,
  stopBugTrackingScreenRecording,
} from "./utils/screen-recorder";
import { generateWidgetUserIDAndStore } from "./utils/user-session";

const crowdOrigin = extensionBaseOriginUrl;

export const initCrowdFeedbackWidget = () => {
  const doContainerExist = document.getElementsByClassName("crowd-widget");
  if (doContainerExist.length) return;
  if ((window as any).CrowdApp && (window as any).CrowdApp.crowd_token) {
    const crowd_token = (window as any).CrowdApp.crowd_token;
    const crowdWidgetClass = new SetupFeedbackWidget(crowd_token);

    crowdWidgetClass.setupWidgetContainer();
  } else {
    console.error(
      "Crowd App installation failed. Please ensure that you are using the correct code snippet"
    );
  }
};

class SetupFeedbackWidget {
  private integrationToken: string = "";

  widgetParentContainer = null as unknown as HTMLDivElement;

  constructor(integrationToken: string) {
    this.integrationToken = integrationToken;
  }

  setupWidgetContainer() {
    store.modules.widget.action.generateElementIds(CrowdElementIdPrefix);
    //** Setup the necessary containers for the widget  */
    this.widgetParentContainer = document.createElement("div");
    this.widgetParentContainer.classList.add("crowd-widget");
    this.widgetParentContainer.setAttribute(
      "id",
      store.modules.widget.state.widgetContainerId
    );

    this.widgetParentContainer.innerHTML += LauncherFrame();
    this.widgetParentContainer.innerHTML += WidgetPanelElement();
    this.widgetParentContainer.innerHTML += RecorderControllerElement();
    this.widgetParentContainer.innerHTML += RecorderPreviewElement();
    document.body.appendChild(this.widgetParentContainer);

    setTimeout(() => {
      store.modules.widget.action.updateWidgetSectionVisibility({
        isElementsMounted: true,
      });
    }, 100);

    addListenerForPanelCloseBtn();

    window.addEventListener("message", (event) => {
      if (event.origin !== crowdOrigin) return;
      this.listenAndExecutePostMessageInteration(event);
    });

    this.assignWidgetPanelAndLauncherEndpoints();

    enableControllerDragging();

    assignListenerToControlButton();

    window.addEventListener("popstate", triggerWidgetOnLinkHash.bind(this));
  }

  /**
   * Assigns widget panel and launcher endpoints if launcherIframe and panelIframe elements are present.
   */
  private assignWidgetPanelAndLauncherEndpoints() {
    const elementRefs = widgetElementsReferences();
    const widgetFrame = widgetFrameEndpoint(this.integrationToken);

    if (
      elementRefs.launcherIframe &&
      elementRefs.panelIframe &&
      elementRefs.launcherIframe.contentWindow &&
      elementRefs.panelIframe.contentWindow
    ) {
      const { launcherEndpoint, panelEndpoint } = widgetFrame;
      elementRefs.launcherIframe.contentWindow.location.href = launcherEndpoint;
      elementRefs.panelIframe.contentWindow.location.href = panelEndpoint;
    }
  }

  /**
   * Assigns widget controller endpoints based on element references and integration token.
   */
  private assignWidgetControllerEndpoints() {
    const elementRefs = widgetElementsReferences();
    const widgetFrame = widgetFrameEndpoint(this.integrationToken);
    if (elementRefs.controllerIframe?.contentWindow) {
      elementRefs.controllerIframe.contentWindow.location.href =
        widgetFrame.controllerEndpoint;
    }
  }

  private listenAndExecutePostMessageInteration(
    event: MessageEvent<WidgetPostMessageEventData>
  ) {
    if (event.origin !== crowdOrigin) return;

    switch (event.data.eventType) {
      case WidgetEventType.LauncherLoaded: {
        store.modules.widget.action.updateIframeLoaded({
          isLauncherFrameLoaded: true,
        });
        if (!event.data.payload.showFeedbackWidget) {
          this.clearWidgetOnDeactivation();
          return;
        }

        store.modules.widget.action.updateShouldShowLauncher(
          !event.data.payload.hideLauncherButton
        );
        store.modules.widget.action.updateDisplayRules(
          event.data.payload.displayRules
        );

        checkCompabilityForWidget();
        break;
      }
      case WidgetEventType.LauncherResize: {
        adjustWidgetLauncherPositionDimension("Resize", event.data.payload);
        break;
      }
      case WidgetEventType.ImpressionRecorded: {
        generateWidgetUserIDAndStore();
        break;
      }
      case WidgetEventType.PanelLoaded: {
        store.modules.widget.action.updateIframeLoaded({
          isPanelFrameLoaded: true,
        });
        adjustWidgetPanelPositionDimension("Position", event.data.payload);
        triggerWidgetOnLinkHash();
        /* Load the controller iframe */
        this.assignWidgetControllerEndpoints();
        store.modules.widget.action.updateIframeLoaded({
          isControllerFrameLoaded: true,
        });
        break;
      }
      case WidgetEventType.PanelResize: {
        adjustWidgetPanelPositionDimension("Resize", event.data.payload);
        break;
      }
      case WidgetEventType.OpenPanel: {
        store.modules.widget.action.updateWidgetSectionVisibility({
          isPanelVisible: true,
          isLauncherVisible: false,
        });
        break;
      }
      case WidgetEventType.StartScreenRecord: {
        startBugTrackingScreenRecording();
        store.modules.widget.action.updateWidgetSectionVisibility({
          isControllerVisible: true,
          isPanelVisible: false,
        });
        break;
      }
      case WidgetEventType.StopScreenRecord: {
        stopBugTrackingScreenRecording();
        document.body.classList.add("show-crowd-player");
        store.modules.widget.action.updateWidgetSectionVisibility({
          isControllerVisible: false,
          isRecordPlayerVisible: true,
        });
      }
    }
  }

  clearWidgetOnDeactivation() {
    this.widgetParentContainer.remove();
  }
}
