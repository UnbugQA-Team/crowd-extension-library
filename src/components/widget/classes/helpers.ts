import {
  WidgetDisplayRules,
  WidgetEventType,
  WidgetImpressionEvent,
  WidgetTargetPage,
} from "../../../model/widget";
import store from "../../../store";
import {
  checkPageCompatibilityTargetedPages,
  extensionBaseOriginUrl,
  getDeviceType,
} from "../../../utils";
import { widgetElementsReferences } from "../utils";
import { getUserIDSession } from "../utils/user-session";
import { CrowdWidgetLauncher } from "./launcher";

export class WidgetHelper {
  private integratedWidgetToken: string = "";
  private launcherInstance: CrowdWidgetLauncher;

  constructor(
    integratedWidgetToken: string,
    launcherInstance: CrowdWidgetLauncher
  ) {
    this.integratedWidgetToken = integratedWidgetToken;
    this.launcherInstance = launcherInstance;
  }

  public checkCompatibilityForWidget() {
    if (
      !store.modules.widget.state.widgetContainerState[
        this.integratedWidgetToken
      ]
    )
      return;
    const elementRefs = widgetElementsReferences(this.integratedWidgetToken);
    const displayRule =
      store.modules.widget.state.widgetContainerState[
        this.integratedWidgetToken
      ].widgetDisplayRule;
    if (displayRule === null) return;
    this.checkDeviceAndPageCompatibilityForWidget(displayRule).then(
      (response) => {
        const widgetState =
          store.modules.widget.state.widgetContainerState[
            this.integratedWidgetToken
          ];
        if (response && widgetState.shouldShowLauncher) {
          elementRefs.widgetWrapper.style.visibility = "visible";
          store.modules.widget.action.updateWidgetSectionVisibility(
            this.integratedWidgetToken,
            {
              isLauncherVisible: widgetState.shouldShowLauncher,
            }
          );
          setTimeout(() => {
            this.launcherInstance.adjustWidgetLauncherPositionDimension(
              "Position",
              response
            );
            if (!getUserIDSession()) {
              const postMessageData: WidgetImpressionEvent = {
                eventType: WidgetEventType.WidgetImpression,
                token: this.integratedWidgetToken,
                payload: {},
              };
              elementRefs.launcherIframe.contentWindow?.postMessage(
                postMessageData,
                extensionBaseOriginUrl
              );
            }
          }, response.showAfter);
        } else if (response && !widgetState.shouldShowLauncher) {
          elementRefs.widgetWrapper.style.visibility = "visible";
          store.modules.widget.action.updateWidgetSectionVisibility(
            this.integratedWidgetToken,
            {
              isLauncherVisible: false,
            }
          );
        } else {
          elementRefs.widgetWrapper.style.visibility = "hidden";
        }
      }
    );
  }

  async checkDeviceAndPageCompatibilityForWidget(data: WidgetDisplayRules) {
    if (
      this.checkDeviceCompatibilityForWidget(data.devices) &&
      data.visibilityOption === "ALLPAGES"
    ) {
      return {
        position: data.position,
        showAfter: data.showWidgetAfter,
      };
    } else if (
      this.checkDeviceCompatibilityForWidget(data.devices) &&
      data.visibilityOption === "SPECIFICPAGES"
    ) {
      const targetedPages = JSON.parse(data.targetPages) as WidgetTargetPage[];
      const pageUrlCompatibility = targetedPages.filter((item) =>
        checkPageCompatibilityTargetedPages(item.optionName, item.optionValue)
      );

      if (
        this.checkDeviceCompatibilityForWidget(data.devices) &&
        pageUrlCompatibility.length > 0
      ) {
        return {
          position: data.position,
          showAfter: data.showWidgetAfter,
        };
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  checkDeviceCompatibilityForWidget(supportedDevices: string[]) {
    const visitorsDeviceType = getDeviceType().toLowerCase();
    return supportedDevices.includes(visitorsDeviceType);
  }

  /**
   * Enables dragging functionality for the widget controller element.
   *
   * @param - The token used to identify the widget elements.
   *
   * This function makes the controller element draggable by attaching mouse
   * event listeners to it. It updates the element's position based on the
   * mouse movements and ensures that the element follows the cursor until
   * the mouse button is released.
   */

  enableControllerDragging() {
    const element = widgetElementsReferences(
      this.integratedWidgetToken
    ).controllerWrapper;

    let pos1 = 0,
      pos2 = 0,
      pos3 = 0,
      pos4 = 0;

    // Function to handle mouse down event
    function dragMouseDown(e: any) {
      e = e || window.event;
      e.preventDefault();
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      document.onmousemove = elementDrag;
    }

    // Function to handle mouse move event
    function elementDrag(e: any) {
      e = e || window.event;
      e.preventDefault();
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      element.style.top = element.offsetTop - pos2 + "px";
      element.style.left = element.offsetLeft - pos1 + "px";
    }

    // Function to handle mouse up event
    function closeDragElement() {
      document.onmouseup = null;
      document.onmousemove = null;
    }

    // Attach the event listener to the iframe
    element.onmousedown = dragMouseDown;
  }

  triggerWidgetOnLinkHash() {
    const onTriggerHashString: string =
      "#crowd-widget-" + this.integratedWidgetToken;
    try {
      this.checkCompatibilityForWidget();
      const hashString = window.location.hash;
      if (
        hashString !== onTriggerHashString &&
        store.modules.widget.state.widgetContainerState[
          this.integratedWidgetToken
        ].isPanelVisible
      ) {
        store.modules.widget.action.updateWidgetSectionVisibility(
          this.integratedWidgetToken,
          {
            isPanelVisible: false,
            isLauncherVisible:
              store.modules.widget.state.widgetContainerState[
                this.integratedWidgetToken
              ].shouldShowLauncher,
          }
        );
      } else if (
        hashString === onTriggerHashString &&
        !store.modules.widget.state.widgetContainerState[
          this.integratedWidgetToken
        ].isPanelVisible
      ) {
        store.modules.widget.action.updateWidgetSectionVisibility(
          this.integratedWidgetToken,
          {
            isPanelVisible: true,
            isLauncherVisible: false,
          }
        );
      }
    } catch {
      window.removeEventListener(
        "popstate",
        this.triggerWidgetOnLinkHash.bind(this)
      );
    }
  }
}
