import {
  WidgetDisplayRules,
  WidgetEventType,
  WidgetImpressionEvent,
  WidgetTargetPage,
} from "../../../model/widget";
import store from "../../../store";
import {
  checkPageCompabilityTargetedPages,
  extensionBaseOriginUrl,
  getDeviceType,
  urlPathQuery,
  widgetBaseUrl,
} from "../../../utils";
import { elementSelector } from "../../../utils/dom_utils";
import { adjustWidgetLauncherPositionDimension } from "../launcher";
import { getUserIDSession } from "./user-session";

/**
 * Retrieves references to various widget elements.
 *
 * @returns {Object} Object containing references to widget elements
 * @throws {Error} If the widget container ID, panel frame wrapper ID, panel frame ID, launcher frame ID,
 * controller frame ID, or controller frame wrapper ID is not found in the store.
 */
export const widgetElementsReferences = (): {
  widgetWrapper: HTMLDivElement;
  panelContainerElement: HTMLDivElement;
  panelIframe: HTMLIFrameElement;
  launcherIframe: HTMLIFrameElement;
  controllerWapper: HTMLDivElement;
  controllerIframe: HTMLIFrameElement;
  playerFrame: HTMLDivElement;
} => {
  const widgetContainerId: string =
    store.modules.widget.state.widgetContainerId;
  const panelFrameWrapperId: string =
    store.modules.widget.state.panelFrameWrapperId;
  const panelFrameId: string = store.modules.widget.state.panelFrameId;
  const launcherFrameId: string = store.modules.widget.state.launcherFrameId;
  const controllerFrameId: string =
    store.modules.widget.state.controllerFrameId;
  const controllerFrameWrapperId: string =
    store.modules.widget.state.controllerFrameWrapperId;
  const screenRecordPlayerFrameId: string =
    store.modules.widget.state.screenRecordPlayerFrameId;

  const widgetWrapper: HTMLDivElement = elementSelector(
    "id",
    widgetContainerId
  ) as HTMLDivElement;
  if (!widgetWrapper) {
    throw new Error(`Element with ID "${widgetContainerId}" not found`);
  }

  const panelContainerElement: HTMLDivElement = elementSelector(
    "id",
    panelFrameWrapperId
  ) as HTMLDivElement;
  if (!panelContainerElement) {
    throw new Error(`Element with ID "${panelFrameWrapperId}" not found`);
  }

  const panelIframe: HTMLIFrameElement = elementSelector(
    "id",
    panelFrameId
  ) as HTMLIFrameElement;
  if (!panelIframe) {
    throw new Error(`Element with ID "${panelFrameId}" not found`);
  }

  const launcherIframe: HTMLIFrameElement = elementSelector(
    "id",
    launcherFrameId
  ) as HTMLIFrameElement;
  if (!launcherIframe) {
    throw new Error(`Element with ID "${launcherFrameId}" not found`);
  }

  const controllerWapper: HTMLDivElement = elementSelector(
    "id",
    controllerFrameWrapperId
  ) as HTMLDivElement;
  if (!controllerWapper) {
    throw new Error(`Element with ID "${controllerFrameWrapperId}" not found`);
  }

  const controllerIframe: HTMLIFrameElement = elementSelector(
    "id",
    controllerFrameId
  ) as HTMLIFrameElement;
  if (!controllerIframe) {
    throw new Error(`Element with ID "${controllerFrameId}" not found`);
  }

  const playerFrame: HTMLDivElement = elementSelector(
    "id",
    screenRecordPlayerFrameId
  ) as HTMLDivElement;
  if (!playerFrame) {
    throw new Error(`Element with ID "${screenRecordPlayerFrameId}" not found`);
  }

  return {
    widgetWrapper,
    panelContainerElement,
    panelIframe,
    launcherIframe,
    controllerWapper,
    controllerIframe,
    playerFrame,
  };
};

/**
 * Generates widget frame endpoints based on the integration token.
 *
 * @param {string} integrationToken - The integration token used to generate the endpoints.
 * @return {object} An object containing panel, launcher, and controller endpoints.
 */

/**
 * Generates widget frame endpoints based on the integration token.
 *
 * @param {string} integrationToken - The integration token used to generate the endpoints.
 * @return {Object} An object containing panel, launcher, and controller endpoints.
 * @property {string} panelEndpoint - The endpoint for the panel iframe.
 * @property {string} launcherEndpoint - The endpoint for the launcher iframe.
 * @property {string} controllerEndpoint - The endpoint for the controller iframe.
 */
export const widgetFrameEndpoint = (
  integrationToken: string
): {
  panelEndpoint: string;
  launcherEndpoint: string;
  controllerEndpoint: string;
} => {
  return {
    panelEndpoint: `${widgetBaseUrl}/${urlPathQuery(integrationToken)}`,
    launcherEndpoint: `${widgetBaseUrl}/launcher/${urlPathQuery(
      integrationToken
    )}`,
    controllerEndpoint: `${widgetBaseUrl}/recorder-controller/${urlPathQuery(
      integrationToken
    )}`,
  };
};

const checkDeviceCompabilityForWidget = (supportedDevices: string[]) => {
  const visitorsDeviceType = getDeviceType().toLowerCase();
  return supportedDevices.includes(visitorsDeviceType);
};

export const checkDeviceAndPageCompabilityForWidget = async (
  data: WidgetDisplayRules
) => {
  if (
    checkDeviceCompabilityForWidget(data.devices) &&
    data.visibilityOption === "ALLPAGES"
  ) {
    return {
      position: data.position,
      showAfter: data.showWidgetAfter,
    };
  } else if (
    checkDeviceCompabilityForWidget(data.devices) &&
    data.visibilityOption === "SPECIFICPAGES"
  ) {
    const targetedPages = JSON.parse(data.targetPages) as WidgetTargetPage[];
    const pageUrlCompability = targetedPages.filter((item) =>
      checkPageCompabilityTargetedPages(item.optionName, item.optionValue)
    );

    if (
      checkDeviceCompabilityForWidget(data.devices) &&
      pageUrlCompability.length > 0
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
};

export const checkCompabilityForWidget = () => {
  const elementRefs = widgetElementsReferences();

  if (store.modules.widget.state.widgetDisplayRule === null) return;
  checkDeviceAndPageCompabilityForWidget(
    store.modules.widget.state.widgetDisplayRule
  ).then((response) => {
    if (response && store.modules.widget.state.shouldShowLauncher) {
      elementRefs.widgetWrapper.style.visibility = "visible";
      store.modules.widget.action.updateWidgetSectionVisibility({
        isLauncherVisible: store.modules.widget.state.shouldShowLauncher,
      });
      setTimeout(() => {
        adjustWidgetLauncherPositionDimension("Position", response);
        if (!getUserIDSession()) {
          const postMessageData: WidgetImpressionEvent = {
            eventType: WidgetEventType.WidgetImpression,
            payload: {},
          };
          elementRefs.launcherIframe.contentWindow?.postMessage(
            postMessageData,
            extensionBaseOriginUrl
          );
        }
      }, response.showAfter);
    } else if (response && !store.modules.widget.state.shouldShowLauncher) {
      elementRefs.widgetWrapper.style.visibility = "visible";
      store.modules.widget.action.updateWidgetSectionVisibility({
        isLauncherVisible: false,
      });
    } else {
      elementRefs.widgetWrapper.style.visibility = "hidden";
    }
  });
};

export const enableControllerDragging = () => {
  const element = widgetElementsReferences().controllerWapper;

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
};
