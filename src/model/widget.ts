export interface ActivatedWidgetResponse {
  data: string[];
  status: number;
  message: any[];
}

export enum WidgetEventType {
  LauncherLoaded = "LAUNCHERLOADED",
  LauncherResize = "LAUNCHERRESIZE",
  PanelLoaded = "PANELLOADED",
  PanelResize = "PANELRESIZE",
  OpenPanel = "OPENPANEL",
  WidgetImpression = "WIDGETIMPRESSION",
  ImpressionRecorded = "IMPRESSIONRECORDED",
  StartScreenRecord = "STARTSCREENRECORD",
  StopScreenRecord = "STOPSCREENRECORD",
  ScreenRecordDone = "SCREENRECORDDONE",
  StartCountDown = "STARTCOUNTDOWN",
}

export type WidgetPostMessageEventData =
  | LauncherLoadedEvent
  | LauncherResizeEvent
  | WidgetImpressionEvent
  | WidgetImpressionRecordedEvent
  | PanelLoadedEvent
  | OpenPanelEvent
  | PanelResizeEvent
  | StartCountDownEvent
  | ScreenRecordDoneEvent
  | StartScreenRecordEvent
  | StopScreenRecordEvent;

export interface LauncherLoadedEvent {
  eventType: WidgetEventType.LauncherLoaded;
  token: string;
  payload: {
    displayRules: WidgetDisplayRules;
    showFeedbackWidget: boolean;
    hideLauncherButton: boolean;
  };
}

export interface LauncherResizeEvent {
  eventType: WidgetEventType.LauncherResize;
  token: string;
  payload: {
    height: number;
    width: number;
  };
}

export interface WidgetImpressionEvent {
  eventType: WidgetEventType.WidgetImpression;
  token: string;
  payload: {};
}

export interface WidgetImpressionRecordedEvent {
  eventType: WidgetEventType.ImpressionRecorded;
  token: string;
  payload: {};
}

export interface PanelLoadedEvent {
  eventType: WidgetEventType.PanelLoaded;
  token: string;
  payload: {
    position: string;
  };
}

export interface OpenPanelEvent {
  eventType: WidgetEventType.OpenPanel;
  token: string;
  payload: {};
}

export interface PanelResizeEvent {
  eventType: WidgetEventType.PanelResize;
  token: string;
  payload: {
    height: number;
    width: number;
  };
}

export interface StartCountDownEvent {
  eventType: WidgetEventType.StartCountDown;
  token: string;
  payload: {};
}

export interface ScreenRecordDoneEvent {
  eventType: WidgetEventType.ScreenRecordDone;
  token: string;
  payload: {
    recordedEvent: any[];
  };
}

export interface StartScreenRecordEvent {
  eventType: WidgetEventType.StartScreenRecord;
  token: string;
  payload: {};
}

export interface StopScreenRecordEvent {
  eventType: WidgetEventType.StopScreenRecord;
  token: string;
  payload: {};
}

export interface WidgetDisplayRules {
  id: string;
  devices: string[];
  position: string;
  widgetId: string;
  createdAt: string;
  updatedAt: string;
  targetPages: string;
  showWidgetAfter: number;
  widgetDetailsId: string;
  visibilityOption: string;
  specificPageValue: string;
  allPagesIsSelected: boolean;
  specificPageOption: string;
  specificPageIsSelected: boolean;
}

export interface WidgetTargetPage {
  optionName: string;
  optionValue: string;
}
