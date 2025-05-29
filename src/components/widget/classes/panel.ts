import { watch } from "valtio/utils";
import store from "../../../store";
import { widgetElementsReferences } from "../utils";

export class CrowdWidgetPanel {
  private integratedWidgetToken: string = "";

  constructor(integratedWidgetToken: string) {
    this.integratedWidgetToken = integratedWidgetToken;
  }

  public setupWidgetPanelElement() {
    if (
      !store.modules.widget.state.widgetContainerState[
        this.integratedWidgetToken
      ]
    )
      return;
    watch((get) => {
      const isPanelVisible = get(store.modules.widget.state)
        .widgetContainerState[this.integratedWidgetToken].isPanelVisible;

      if (
        !store.modules.widget.state.widgetContainerState[
          this.integratedWidgetToken
        ].isElementsMounted
      )
        return;
      const elementRefs = widgetElementsReferences(this.integratedWidgetToken);

      elementRefs.panelContainerElement.style.visibility = isPanelVisible
        ? "visible"
        : "hidden";
    });

    const { panelFrameWrapperId, panelFrameId, panelCloseButtonId } =
      store.modules.widget.state.widgetContainerState[
        this.integratedWidgetToken
      ];

    return `<div id="${panelFrameWrapperId}" class="crowd-widget-body-frame" style="height: 0; visibility: hidden;"> 
                <button type="button" id="${panelCloseButtonId}" class="close-widget-panel-btn">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 12L12 4M4 4L12 12" stroke="#F9FAFB" stroke-width="1.13" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button> 
                <iframe id="${panelFrameId}" frameborder="0" class="crowd-widget-body-iframe" allowtransparency="true" style="height: 0;"></iframe>
            </div>`;
  }

  public addListenerForPanelCloseBtn() {
    if (
      !store.modules.widget.state.widgetContainerState[
        this.integratedWidgetToken
      ]
    )
      return;
    document
      .getElementById(
        store.modules.widget.state.widgetContainerState[
          this.integratedWidgetToken
        ].panelCloseButtonId
      )
      ?.addEventListener("click", () => {
        store.modules.widget.action.updateWidgetSectionVisibility(
          this.integratedWidgetToken,
          {
            isPanelVisible: false,
            isLauncherVisible:
              store.modules.widget.state.widgetContainerState[
                this.integratedWidgetToken
              ].shouldShowLauncher,
          }
        );

        /* Remove the hash from the URL if panel was opened by on-click trigger*/
        if (window.location.hash) {
          history.pushState(
            "",
            document.title,
            window.location.pathname + window.location.search
          );
        }
      });
  }

  public adjustWidgetPanelPositionDimension(
    action: "Position" | "Resize",
    eventData: {
      position?: string;
      height?: number;
      width?: number;
    }
  ) {
    if (
      !store.modules.widget.state.widgetContainerState[
        this.integratedWidgetToken
      ]
    )
      return;
    const elementRefs = widgetElementsReferences(this.integratedWidgetToken);
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
  }
}
