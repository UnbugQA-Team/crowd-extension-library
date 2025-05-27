import { generateId } from "../../utils";
import userTestPromptState from "./state";

export default {
  createInitialPrompt(workspaceId: string) {
    userTestPromptState.userTestPromptContainerState[workspaceId] = {
      isElementsMounted: false,

      promptParentContainerId: "",
      promptContainerId: "",
      panelFrameWrapperId: "",
      panelCloseButtonId: "",

      promptDisplayRule: null,
    };
  },

  generateElementIds(workspaceId: string, elementIdPrefix: string) {
    userTestPromptState.userTestPromptContainerState[
      workspaceId
    ].promptParentContainerId = generateId(
      `${elementIdPrefix}-parent-container`
    );
    userTestPromptState.userTestPromptContainerState[
      workspaceId
    ].promptContainerId = generateId(`${elementIdPrefix}-body-container`);
    userTestPromptState.userTestPromptContainerState[
      workspaceId
    ].panelFrameWrapperId = generateId(`${elementIdPrefix}-body`);
    userTestPromptState.userTestPromptContainerState[
      workspaceId
    ].panelCloseButtonId = generateId(`${elementIdPrefix}-close-button`);
  },
};
