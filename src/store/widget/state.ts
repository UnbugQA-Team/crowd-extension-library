import { proxy } from "valtio";
import { WidgetDisplayRules } from "../../model/widget";

export interface WidgetFeedbackState {
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

  widgetDisplayRule: WidgetDisplayRules | null;
}

export const state: WidgetFeedbackState = proxy({
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

  widgetDisplayRule: null,
});

export default state;
