import {
  StartCountDownEvent,
  WidgetEventType,
  WidgetPostMessageEventData,
} from "../../model/widget";
import store from "../../store";
import { extensionBaseOriginUrl } from "../../utils";
import { WidgetHelper } from "./classes/helpers";
import { CrowdWidgetLauncher } from "./classes/launcher";
import { CrowdWidgetPanel } from "./classes/panel";
import { CrowdWidgetScreenRecorder } from "./classes/screen-recorder";
import { CrowdElementIdPrefix } from "./constant";

import { widgetElementsReferences, widgetFrameEndpoint } from "./utils";
import { generateWidgetUserIDAndStore } from "./utils/user-session";

const crowdOrigin = extensionBaseOriginUrl;

export class SetupFeedbackWidget {
  private integratedWidgetToken: string = "";

  widgetParentContainer = null as unknown as HTMLDivElement;

  private crowdWidgetPanel: CrowdWidgetPanel;
  private crowdWidgetLauncher: CrowdWidgetLauncher;
  private crowdScreenRecorder: CrowdWidgetScreenRecorder;
  private crowdWidgetHelper: WidgetHelper;

  constructor(integratedWidgetToken: string) {
    this.integratedWidgetToken = integratedWidgetToken;
    store.modules.widget.action.createWidgetInitialState(
      this.integratedWidgetToken
    );

    this.crowdWidgetPanel = new CrowdWidgetPanel(integratedWidgetToken);
    this.crowdWidgetLauncher = new CrowdWidgetLauncher(integratedWidgetToken);
    this.crowdScreenRecorder = new CrowdWidgetScreenRecorder(
      integratedWidgetToken
    );
    this.crowdWidgetHelper = new WidgetHelper(
      integratedWidgetToken,
      this.crowdWidgetLauncher
    );
  }

  setupWidgetContainer() {
    store.modules.widget.action.generateElementIds(
      this.integratedWidgetToken,
      CrowdElementIdPrefix
    );
    //** Setup the necessary containers for the widget  */
    this.widgetParentContainer = document.createElement("div");
    this.widgetParentContainer.classList.add("crowd-widget");
    this.widgetParentContainer.setAttribute(
      "id",
      store.modules.widget.state.widgetContainerState[
        this.integratedWidgetToken
      ].widgetContainerId
    );

    this.widgetParentContainer.innerHTML +=
      this.crowdWidgetLauncher.setupWidgetLauncherElement(); // LauncherFrame();
    this.widgetParentContainer.innerHTML +=
      this.crowdWidgetPanel.setupWidgetPanelElement(); //WidgetPanelElement();
    this.widgetParentContainer.innerHTML +=
      this.crowdScreenRecorder.setupWidgetScreenRecorderElement(); // RecorderControllerElement();
    this.widgetParentContainer.innerHTML +=
      this.crowdScreenRecorder.setupWidgetScreenRecorderPreviewElement(); // RecorderPreviewElement();
    document.body.appendChild(this.widgetParentContainer);

    setTimeout(() => {
      store.modules.widget.action.updateWidgetSectionVisibility(
        this.integratedWidgetToken,
        {
          isElementsMounted: true,
        }
      );
    }, 100);

    this.crowdWidgetPanel.addListenerForPanelCloseBtn();

    window.addEventListener("message", (event) => {
      if (event.origin !== crowdOrigin) return;
      this.listenAndExecutePostMessageInteraction(event);
    });

    this.assignWidgetPanelAndLauncherEndpoints();

    this.crowdWidgetHelper.enableControllerDragging();

    this.crowdScreenRecorder.assignListenerToControlButton();

    window.addEventListener(
      "popstate",
      this.crowdWidgetHelper.triggerWidgetOnLinkHash.bind(this)
    );
  }

  /**
   * Assigns widget panel and launcher endpoints if launcherIframe and panelIframe elements are present.
   */
  private assignWidgetPanelAndLauncherEndpoints() {
    const elementRefs = widgetElementsReferences(this.integratedWidgetToken);
    const widgetFrame = widgetFrameEndpoint(this.integratedWidgetToken);

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
    const elementRefs = widgetElementsReferences(this.integratedWidgetToken);
    const widgetFrame = widgetFrameEndpoint(this.integratedWidgetToken);
    if (elementRefs.controllerIframe?.contentWindow) {
      elementRefs.controllerIframe.contentWindow.location.href =
        widgetFrame.controllerEndpoint;
    }
  }

  private listenAndExecutePostMessageInteraction(
    event: MessageEvent<WidgetPostMessageEventData>
  ) {
    if (event.origin !== crowdOrigin) return;

    /* Check if the token is matching */
    if (event.data.token !== this.integratedWidgetToken) return;

    console.log(
      event.data.token,
      this.integratedWidgetToken,
      event.data.payload
    );
    switch (event.data.eventType) {
      case WidgetEventType.LauncherLoaded: {
        store.modules.widget.action.updateIframeLoaded(
          this.integratedWidgetToken,
          {
            isLauncherFrameLoaded: true,
          }
        );
        if (!event.data.payload.showFeedbackWidget) {
          this.clearWidgetOnDeactivation();
          return;
        }

        store.modules.widget.action.updateShouldShowLauncher(
          this.integratedWidgetToken,
          !event.data.payload.hideLauncherButton
        );
        store.modules.widget.action.updateDisplayRules(
          this.integratedWidgetToken,
          event.data.payload.displayRules
        );

        this.crowdWidgetHelper.checkCompatibilityForWidget();
        break;
      }
      case WidgetEventType.LauncherResize: {
        this.crowdWidgetLauncher.adjustWidgetLauncherPositionDimension(
          "Resize",
          event.data.payload
        );
        break;
      }
      case WidgetEventType.ImpressionRecorded: {
        generateWidgetUserIDAndStore();
        break;
      }
      case WidgetEventType.PanelLoaded: {
        store.modules.widget.action.updateIframeLoaded(
          this.integratedWidgetToken,
          {
            isPanelFrameLoaded: true,
          }
        );
        this.crowdWidgetPanel.adjustWidgetPanelPositionDimension(
          "Position",
          event.data.payload
        );
        this.crowdWidgetHelper.triggerWidgetOnLinkHash();
        /* Load the controller iframe */
        this.assignWidgetControllerEndpoints();
        store.modules.widget.action.updateIframeLoaded(
          this.integratedWidgetToken,
          {
            isControllerFrameLoaded: true,
          }
        );
        break;
      }
      case WidgetEventType.PanelResize: {
        this.crowdWidgetPanel.adjustWidgetPanelPositionDimension(
          "Resize",
          event.data.payload
        );
        break;
      }
      case WidgetEventType.OpenPanel: {
        store.modules.widget.action.updateWidgetSectionVisibility(
          this.integratedWidgetToken,
          {
            isPanelVisible: true,
            isLauncherVisible: false,
          }
        );

        const elementRefs = widgetElementsReferences(
          this.integratedWidgetToken
        );
        const postMessageData: StartCountDownEvent = {
          eventType: WidgetEventType.StartCountDown,
          token: this.integratedWidgetToken,
          payload: {},
        };
        elementRefs.panelIframe.contentWindow?.postMessage(
          postMessageData,
          extensionBaseOriginUrl
        );
        break;
      }
      case WidgetEventType.StartScreenRecord: {
        this.crowdScreenRecorder.startBugTrackingScreenRecording();
        store.modules.widget.action.updateWidgetSectionVisibility(
          this.integratedWidgetToken,
          {
            isControllerVisible: true,
            isPanelVisible: false,
          }
        );
        break;
      }
      case WidgetEventType.StopScreenRecord: {
        this.crowdScreenRecorder.stopBugTrackingScreenRecording();
        document.body.classList.add("show-crowd-player");
        store.modules.widget.action.updateWidgetSectionVisibility(
          this.integratedWidgetToken,
          {
            isControllerVisible: false,
            isRecordPlayerVisible: true,
          }
        );
      }
    }
  }

  clearWidgetOnDeactivation() {
    try {
      this.widgetParentContainer.remove();
    } catch (error) {}
  }
}
