import { WidgetDisplayRules, WidgetTargetPage } from "../../../model/widget";
import store from "../../../store";
import {
  checkPageCompatibilityTargetedPages,
  getDeviceType,
  urlPathQuery,
  widgetBaseUrl,
} from "../../../utils";
import { elementSelector } from "../../../utils/dom_utils";

/**
 * Retrieves references to various widget elements.
 *
 * @returns {Object} Object containing references to widget elements
 * @throws {Error} If the widget container ID, panel frame wrapper ID, panel frame ID, launcher frame ID,
 * controller frame ID, or controller frame wrapper ID is not found in the store.
 */
export const widgetElementsReferences = (
  widgetToken: string
): {
  widgetWrapper: HTMLDivElement;
  panelContainerElement: HTMLDivElement;
  panelIframe: HTMLIFrameElement;
  launcherIframe: HTMLIFrameElement;
  controllerWrapper: HTMLDivElement;
  controllerIframe: HTMLIFrameElement;
  playerFrame: HTMLDivElement;
} => {
  const widgetContainerId: string =
    store.modules.widget.state.widgetContainerState[widgetToken]
      .widgetContainerId;
  const panelFrameWrapperId: string =
    store.modules.widget.state.widgetContainerState[widgetToken]
      .panelFrameWrapperId;
  const panelFrameId: string =
    store.modules.widget.state.widgetContainerState[widgetToken].panelFrameId;
  const launcherFrameId: string =
    store.modules.widget.state.widgetContainerState[widgetToken]
      .launcherFrameId;
  const controllerFrameId: string =
    store.modules.widget.state.widgetContainerState[widgetToken]
      .controllerFrameId;
  const controllerFrameWrapperId: string =
    store.modules.widget.state.widgetContainerState[widgetToken]
      .controllerFrameWrapperId;
  const screenRecordPlayerFrameId: string =
    store.modules.widget.state.widgetContainerState[widgetToken]
      .screenRecordPlayerFrameId;

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

  const controllerWrapper: HTMLDivElement = elementSelector(
    "id",
    controllerFrameWrapperId
  ) as HTMLDivElement;
  if (!controllerWrapper) {
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
    controllerWrapper,
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
      checkPageCompatibilityTargetedPages(item.optionName, item.optionValue)
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
