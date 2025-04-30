import { fetchActivatedWidget } from "../../services";
import { SetupFeedbackWidget } from "./setup-widget";

export const initCrowdFeedbackWidget = async () => {
  try {
    if ((window as any).CrowdApp) {
      const extension_token = (window as any).CrowdApp.crowd_extension_token;
      if (!extension_token) {
        throw new Error(
          "Crowd App installation failed. Please ensure that you are using the correct code snippet"
        );
      }
      const response = await fetchActivatedWidget(extension_token);
      if (response.data.length === 0) {
        throw new Error(
          "No widget is active for this extension. Please ensure that you are using the correct code snippet"
        );
      }

      response.data.forEach((widgetId: string) => {
        const crowdWidgetClass = new SetupFeedbackWidget(widgetId);
        crowdWidgetClass.setupWidgetContainer();
      });
    }
  } catch (error: any) {
    console.warn(
      error.message ??
        "Crowd App installation failed. Please ensure that you are using the correct code snippet"
    );
  }
};
