import userTestPrompt from "./userTestPrompt";
import { UserTestPromptState } from "./userTestPrompt/state";
import widget from "./widget";
import { WidgetFeedbackState } from "./widget/state";

export interface RootState {
  widget: WidgetFeedbackState;
  userTest: UserTestPromptState;
}

export default {
  modules: {
    widget,
    userTestPrompt,
  },
  strict: false,
  state: () => ({}),
};
