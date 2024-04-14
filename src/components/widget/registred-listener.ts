import store from "../../store";
import { checkCompabilityForWidget } from "./utils";

export const triggerWidgetOnLinkHash = () => {
  const onTriggerHashString: string = "#crowd-widget";
  try {
    checkCompabilityForWidget();
    const hashString = window.location.hash;
    if (
      hashString !== onTriggerHashString &&
      store.modules.widget.state.isPanelVisible
    ) {
      store.modules.widget.action.updateWidgetSectionVisibility({
        isPanelVisible: false,
        isLauncherVisible: store.modules.widget.state.shouldShowLauncher,
      });
    } else if (
      hashString === onTriggerHashString &&
      !store.modules.widget.state.isPanelVisible
    ) {
      store.modules.widget.action.updateWidgetSectionVisibility({
        isPanelVisible: true,
        isLauncherVisible: false,
      });
    }
  } catch {
    window.removeEventListener("popstate", triggerWidgetOnLinkHash.bind(this));
  }
};
