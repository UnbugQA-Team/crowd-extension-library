export enum EventType {
  PromptLoaded = "PROMPTLOADED",
  GetPromptSize = "GETPROMPTSIZE",
  PromptResize = "PROMPTRESIZE",
  LastPromptUnmoderatedId = "LASTPROMPTUNMODERATEDID",
  RemovePrompt = "REMOVEPROMPT",
  CheckDeviceCompatibility = "CHECKDEVICECOMPATIBILITY",
  PaginateUnmoderatedTest = "PAGINATEUNMODERATEDTEST",
  StoreUserTestId = "STOREMODERATEDTESTID",
}

export type PostMessageEventData =
  | PromptLoadedEvent
  | GetPromptSizeEvent
  | PromptResizeEvent
  | PromptAccessedIdsEvent
  | PromptRemovedEvent
  | PromptCompabilityCheckEvent
  | PromptStoreUnmoderatedTestIdEvent
  | PromptNextUnmoderatedTestEvent;

export interface PromptLoadedEvent {
  eventType: EventType.PromptLoaded;
  payload: {
    showPrompt: Boolean;
  };
}

export interface GetPromptSizeEvent {
  eventType: EventType.GetPromptSize;
  payload: {};
}

export interface PromptResizeEvent {
  eventType: EventType.PromptResize;
  payload: {
    height: number;
    width: number;
  };
}

export interface PromptAccessedIdsEvent {
  eventType: EventType.LastPromptUnmoderatedId;
  payload: {
    answeredTestIds: string[];
    ignoredTestIds: string[];
    incompatibleTestIds: string[];
  };
}

export interface PromptRemovedEvent {
  eventType: EventType.RemovePrompt;
  payload: {};
}

export interface PromptCompabilityCheckEvent {
  eventType: EventType.CheckDeviceCompatibility;
  payload: PromptDisplayRule;
}

export interface PromptStoreUnmoderatedTestIdEvent {
  eventType: EventType.StoreUserTestId;
  payload: {
    onCloseAction: "IGNORE" | "ANSWER";
  };
}

export interface PromptNextUnmoderatedTestEvent {
  eventType: EventType.PaginateUnmoderatedTest;
  payload: {};
}

export interface PublishedUnmoderatedTest {
  id: string;
  websiteIntegrationId: string;
  testId: string;
  acceptingResponse: boolean;
  promptTitle: string;
  promptDescription: string;
  promptButtonText: string;
  promptPosition: string;
  promptTextColor: string;
  promptButtonColor: string;
  promptButtonTextColor: string;
  promptBackgroundColor: string;
  promptTitleColor: string;
  promptDescriptionColor: string;
  crowdBranding: boolean;
  displayOnAllPages: string;
  targetPages: string;
  deviceSupported: string;
  createdAt: string;
  updatedAt: string;
  reshowPrompt: string;
  TestDetail: TestDetail;
}

export interface TestDetail {
  id: string;
  shareLink: string;
  name: string;
}

export interface DeviceSupported {
  mobile: boolean;
  desktop: boolean;
  tablet: boolean;
}

export interface TargetPage {
  optionName: string;
  optionValue: string;
}

export interface PromptDisplayRule {
  id: string;
  acceptingResponse: boolean;
  visibilityOption: string;
  deviceSupported: DeviceSupported;
  targetPages: TargetPage[];
  reshowPrompt: string;
  promptPosition: string;
}
