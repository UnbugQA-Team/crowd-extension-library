import { watch } from "valtio/utils";
import store from "../../store";
import { widgetElementsReferences } from "./utils";

export const LauncherFrame = () => {
  watch((get) => {
    const isLauncherVisible = get(store.modules.widget.state).isLauncherVisible;
    const shouldShowLauncher = get(
      store.modules.widget.state
    ).shouldShowLauncher;

    if (!store.modules.widget.state.isElementsMounted) return;

    const elementRefs = widgetElementsReferences();

    elementRefs.launcherIframe.style.visibility =
      !shouldShowLauncher || !isLauncherVisible ? "hidden" : "visible";
  });

  return `<iframe id="${store.modules.widget.state.launcherFrameId}" frameborder="0" class="crowd-widget-launcher-frame" allowtransparency="true" style="height: 0;"></iframe>`;
};

/**
 * @description Adjusts the position and dimensions of the widget launcher.
 * @param action - The action to be performed. Can be "Position" or "Resize".
 * @param eventData - An object containing the data for the action.
 * @param eventData.position - The position of the launcher, if the action is "Position".
 * @param eventData.height - The height of the launcher, if the action is "Resize".
 * @param eventData.width - The width of the launcher, if the action is "Resize".
 * @returns void
 */
export const adjustWidgetLauncherPositionDimension = (
  action: "Position" | "Resize",
  eventData: {
    position?: string;
    height?: number;
    width?: number;
  }
): void => {
  const elementRefs = widgetElementsReferences();
  if (action === "Position") {
    const positionClass = eventData
      .position!.toLowerCase()
      .split("_")
      .join("-");
    elementRefs.launcherIframe.classList.add(
      `widget-launcher-${positionClass}`
    );
  } else if (action === "Resize") {
    if (eventData.height !== undefined) {
      elementRefs.launcherIframe.style.height = `${eventData.height}px`;
    }
    if (eventData.width !== undefined) {
      elementRefs.launcherIframe.style.width = `${eventData.width}px`;
    }
  }
};
