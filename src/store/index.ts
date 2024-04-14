import widget from "./widget";
import { WidgetFeedbackState } from "./widget/state";

export interface RootState {
  widget: WidgetFeedbackState;
}

export default {
  modules: {
    widget,
  },
  strict: false,
  state: () => ({}),
};
