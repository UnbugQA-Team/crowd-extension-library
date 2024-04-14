import { watch } from "valtio/utils";
import store from "../../store";
import { widgetElementsReferences } from "./utils";

const widgetPanelCloseBtnId = "close-widget-panel-btn";
/**
 * Function that generates the Widget Panel Element HTML with dynamic IDs and styles.
 *
 * @returns The HTML string of the Widget Panel Element.
 */
export const WidgetPanelElement = (): string => {
  watch((get) => {
    const isPanelVisible = get(store.modules.widget.state).isPanelVisible;

    if (!store.modules.widget.state.isElementsMounted) return;
    const elementRefs = widgetElementsReferences();

    elementRefs.panelContainerElement.style.visibility = isPanelVisible
      ? "visible"
      : "hidden";
  });

  const { panelFrameWrapperId, panelFrameId } = store.modules.widget.state;

  return `<div id="${panelFrameWrapperId}" class="crowd-widget-body-frame" style="height: 0; visibility: hidden;"> 
            <button type="button" id="${widgetPanelCloseBtnId}" class="close-widget-panel-btn">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 12L12 4M4 4L12 12" stroke="#F9FAFB" stroke-width="1.13" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button> 
            <iframe id="${panelFrameId}" frameborder="0" class="crowd-widget-body-iframe" allowtransparency="true" style="height: 0;"></iframe>
        </div>`;
};

/**
 * Adds a listener for the panel close button.
 */
export const addListenerForPanelCloseBtn = () => {
  document
    .getElementById(widgetPanelCloseBtnId)
    ?.addEventListener("click", () => {
      store.modules.widget.action.updateWidgetSectionVisibility({
        isPanelVisible: false,
        isLauncherVisible: store.modules.widget.state.shouldShowLauncher,
      });

      /* Remove the hash from the URL if panel was opened by on-click trigger*/
      if (window.location.hash) {
        history.pushState(
          "",
          document.title,
          window.location.pathname + window.location.search
        );
      }
    });
};

/**
 * Adjust the position or size of the widget panel.
 *
 * @param action - The action to perform, either "Position" or "Resize".
 * @param eventData - The data for the action, including the position and optional height and width.
 * @returns void
 */
export const adjustWidgetPanelPositionDimension = (
  action: "Position" | "Resize",
  eventData: {
    position?: string;
    height?: number;
    width?: number;
  }
): void => {
  const elementRefs = widgetElementsReferences();
  if (action === "Position") {
    const panelClass = `widget-panel-${eventData
      .position!.toLowerCase()
      .split("_")
      .join("-")}`;
    const containerClass = `widget-panel-container-${eventData
      .position!.toLowerCase()
      .split("_")
      .join("-")}`;
    elementRefs.panelIframe.classList.add(panelClass);
    elementRefs.panelContainerElement.classList.add(containerClass);
  } else if (action === "Resize") {
    elementRefs.panelIframe.style.height = `${eventData.height}px`;
    elementRefs.panelContainerElement.style.height = `${eventData.height}px`;
  }
};
