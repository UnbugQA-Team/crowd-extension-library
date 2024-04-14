import { WidgetDisplayRules } from "../../model/widget";
import { generateId } from "../../utils";
import widgetState from "./state";

export default {
  /**
   * Generate element ids based on the elementIdPrefix.
   *
   * @param {string} elementIdPrefix - The prefix used for generating element ids.
   */
  generateElementIds(elementIdPrefix: string) {
    widgetState.widgetContainerId = generateId(`${elementIdPrefix}-container`);
    widgetState.panelFrameWrapperId = generateId(
      `${elementIdPrefix}-container`
    );
    widgetState.panelFrameId = generateId(`${elementIdPrefix}-body`);
    widgetState.launcherFrameId = generateId(`${elementIdPrefix}-launcher`);
    widgetState.controllerFrameWrapperId = generateId(
      `${elementIdPrefix}-controller-wrapper`
    );
    widgetState.controllerFrameId = generateId(`${elementIdPrefix}-controller`);
    widgetState.screenRecordPlayerFrameId = generateId(
      `${elementIdPrefix}-record-player-frame`
    );
  },
  /**
   *   * @param {{isLauncherFrameLoaded?: boolean; isPanelFrameLoaded?: boolean; isControllerFrameLoaded?: boolean;}} payload -
   * @return {void}
   */
  updateIframeLoaded(payload: {
    isLauncherFrameLoaded?: boolean;
    isPanelFrameLoaded?: boolean;
    isControllerFrameLoaded?: boolean;
  }) {
    widgetState.isLauncherFrameLoaded =
      payload.isLauncherFrameLoaded ?? widgetState.isLauncherFrameLoaded;
    widgetState.isPanelFrameLoaded =
      payload.isPanelFrameLoaded ?? widgetState.isPanelFrameLoaded;
    widgetState.isControllerFrameLoaded =
      payload.isControllerFrameLoaded ?? widgetState.isControllerFrameLoaded;
  },
  updateDisplayRules(payload: WidgetDisplayRules) {
    widgetState.widgetDisplayRule = payload;
  },
  /**
   *  Update widget section visibility based on the provided payload.
   *
   * @param {object} payload - Object containing visibility settings for different sections of the widget.
   */
  updateWidgetSectionVisibility(payload: {
    isElementsMounted?: boolean;
    isPanelVisible?: boolean;
    isLauncherVisible?: boolean;
    isControllerVisible?: boolean;
    isRecordPlayerVisible?: boolean;
  }) {
    widgetState.isElementsMounted =
      payload.isElementsMounted ?? widgetState.isElementsMounted;
    widgetState.isPanelVisible =
      payload.isPanelVisible ?? widgetState.isPanelVisible;
    widgetState.isLauncherVisible =
      payload.isLauncherVisible ?? widgetState.isLauncherVisible;
    widgetState.isControllerVisible =
      payload.isControllerVisible ?? widgetState.isControllerVisible;
    widgetState.isRecordPlayerVisible =
      payload.isRecordPlayerVisible ?? widgetState.isRecordPlayerVisible;
  },
  updateShouldShowLauncher(value: boolean) {
    widgetState.shouldShowLauncher = value;
  },
};
