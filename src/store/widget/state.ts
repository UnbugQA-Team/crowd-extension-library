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
  integratedWidgetToken: string;

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

  widgetContainerState: { [key: string]: WidgetContainerState };
}

export const state: WidgetFeedbackState = proxy({
  integratedWidgetToken: "",
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

  widgetContainerState: {},
});

export default state;
