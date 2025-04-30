import { proxy } from "valtio";
import { WidgetDisplayRules } from "../../model/widget";

interface WidgetContainerState {
  isElementsMounted: boolean;
  isPanelVisible: boolean;
  isLauncherVisible: boolean;
  isControllerVisible: boolean;
  isRecordPlayerVisible: boolean;
  shouldShowLauncher: boolean;

  isLauncherFrameLoaded: boolean;
  isPanelFrameLoaded: boolean;
  isControllerFrameLoaded: boolean;

  widgetContainerId: string;
  panelFrameWrapperId: string;
  panelFrameId: string;
  launcherFrameId: string;
  controllerFrameWrapperId: string;
  controllerFrameId: string;
  screenRecordPlayerFrameId: string;
  panelCloseButtonId: string;

  widgetDisplayRule: WidgetDisplayRules | null;
}

export interface WidgetFeedbackState {
  widgetContainerState: { [key: string]: WidgetContainerState };
}

export const state: WidgetFeedbackState = proxy({
  widgetContainerState: {},
});

export default state;
