import { SetUpUnModeratedTestPrompt } from "./setup-user-test-prompt";

export const initCrowdPrompt = () => {
  try {
    const doContainerExist = document.getElementsByClassName("crowd-prompt");
    if (doContainerExist.length) {
      throw new Error("Crowd Prompt already exists on the page");
    }

    if ((window as any).CrowdApp) {
      const extension_token = (window as any).CrowdApp.crowd_extension_token;
      if (!extension_token) {
        throw new Error(
          "Crowd App installation failed. Please ensure that you are using the correct code snippet"
        );
      }
      const crowdWidgetClass = new SetUpUnModeratedTestPrompt(extension_token);
      crowdWidgetClass.setupWidgetContainer();
    } else {
      throw new Error();
    }
  } catch (error: any) {
    console.warn(
      error.message ??
        "Crowd App installation failed. Please ensure that you are using the correct code snippet"
    );
  }
};
