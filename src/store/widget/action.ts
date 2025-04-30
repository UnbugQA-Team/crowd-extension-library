import { WidgetDisplayRules } from "../../model/widget";
import { generateId } from "../../utils";
import widgetState from "./state";

export default {
  createWidgetInitialState(token: string) {
    widgetState.widgetContainerState[token] = {
      isElementsMounted: false,
      isPanelVisible: false,
      isLauncherVisible: false,
      isControllerVisible: false,
      isRecordPlayerVisible: false,
      shouldShowLauncher: false,

      isLauncherFrameLoaded: false,
      isPanelFrameLoaded: false,
      isControllerFrameLoaded: false,

      /* Ids for the div container and the iframes */
      widgetContainerId: "",
      panelFrameWrapperId: "",
      panelFrameId: "",
      launcherFrameId: "",
      controllerFrameWrapperId: "",
      controllerFrameId: "",
      screenRecordPlayerFrameId: "",
      panelCloseButtonId: "",

      widgetDisplayRule: null,
    };
  },
  /**
   * Generate element ids based on the elementIdPrefix.
   *
   * @param {string} elementIdPrefix - The prefix used for generating element ids.
   */
  generateElementIds(widgetToken: string, elementIdPrefix: string) {
    widgetState.widgetContainerState[widgetToken].widgetContainerId =
      generateId(`${elementIdPrefix}-container`);
    widgetState.widgetContainerState[widgetToken].panelFrameWrapperId =
      generateId(`${elementIdPrefix}-container`);
    widgetState.widgetContainerState[widgetToken].panelFrameId = generateId(
      `${elementIdPrefix}-body`
    );
    widgetState.widgetContainerState[widgetToken].launcherFrameId = generateId(
      `${elementIdPrefix}-launcher`
    );
    widgetState.widgetContainerState[widgetToken].controllerFrameWrapperId =
      generateId(`${elementIdPrefix}-controller-wrapper`);
    widgetState.widgetContainerState[widgetToken].controllerFrameId =
      generateId(`${elementIdPrefix}-controller`);
    widgetState.widgetContainerState[widgetToken].screenRecordPlayerFrameId =
      generateId(`${elementIdPrefix}-record-player-frame`);
    widgetState.widgetContainerState[widgetToken].panelCloseButtonId =
      generateId(`${elementIdPrefix}-close-button`);
  },
  /**
   *   * @param {{isLauncherFrameLoaded?: boolean; isPanelFrameLoaded?: boolean; isControllerFrameLoaded?: boolean;}} payload -
   * @return {void}
   */
  updateIframeLoaded(
    widgetToken: string,
    payload: {
      isLauncherFrameLoaded?: boolean;
      isPanelFrameLoaded?: boolean;
      isControllerFrameLoaded?: boolean;
    }
  ) {
    widgetState.widgetContainerState[widgetToken].isLauncherFrameLoaded =
      payload.isLauncherFrameLoaded ??
      widgetState.widgetContainerState[widgetToken].isLauncherFrameLoaded;
    widgetState.widgetContainerState[widgetToken].isPanelFrameLoaded =
      payload.isPanelFrameLoaded ??
      widgetState.widgetContainerState[widgetToken].isPanelFrameLoaded;
    widgetState.widgetContainerState[widgetToken].isControllerFrameLoaded =
      payload.isControllerFrameLoaded ??
      widgetState.widgetContainerState[widgetToken].isControllerFrameLoaded;
  },
  updateDisplayRules(widgetToken: string, payload: WidgetDisplayRules) {
    widgetState.widgetContainerState[widgetToken].widgetDisplayRule = payload;
  },
  /**
   *  Update widget section visibility based on the provided payload.
   *
   * @param {object} payload - Object containing visibility settings for different sections of the widget.
   */
  updateWidgetSectionVisibility(
    widgetToken: string,
    payload: {
      isElementsMounted?: boolean;
      isPanelVisible?: boolean;
      isLauncherVisible?: boolean;
      isControllerVisible?: boolean;
      isRecordPlayerVisible?: boolean;
    }
  ) {
    widgetState.widgetContainerState[widgetToken].isElementsMounted =
      payload.isElementsMounted ??
      widgetState.widgetContainerState[widgetToken].isElementsMounted;
    widgetState.widgetContainerState[widgetToken].isPanelVisible =
      payload.isPanelVisible ??
      widgetState.widgetContainerState[widgetToken].isPanelVisible;
    widgetState.widgetContainerState[widgetToken].isLauncherVisible =
      payload.isLauncherVisible ??
      widgetState.widgetContainerState[widgetToken].isLauncherVisible;
    widgetState.widgetContainerState[widgetToken].isControllerVisible =
      payload.isControllerVisible ??
      widgetState.widgetContainerState[widgetToken].isControllerVisible;
    widgetState.widgetContainerState[widgetToken].isRecordPlayerVisible =
      payload.isRecordPlayerVisible ??
      widgetState.widgetContainerState[widgetToken].isRecordPlayerVisible;
  },
  updateShouldShowLauncher(widgetToken: string, value: boolean) {
    widgetState.widgetContainerState[widgetToken].shouldShowLauncher = value;
  },
};
