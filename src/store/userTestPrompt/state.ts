import { proxy } from "valtio";
import { PromptDisplayRule } from "../../model/userTest-prompt";

interface UserTestPromptContainerState {
  isElementsMounted: boolean;

  promptParentContainerId: string;
  promptContainerId: string;
  panelFrameWrapperId: string;
  panelCloseButtonId: string;

  promptDisplayRule: PromptDisplayRule | null;
}

export interface UserTestPromptState {
  userTestPromptContainerState: { [key: string]: UserTestPromptContainerState };
}

export const state: UserTestPromptState = proxy({
  userTestPromptContainerState: {},
});

export default state;
