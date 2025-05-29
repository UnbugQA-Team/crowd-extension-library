import { watch } from "valtio/utils";
import store from "../../../store";
import { widgetElementsReferences } from "../utils";

export class CrowdWidgetLauncher {
  private integratedWidgetToken: string = "";

  constructor(integratedWidgetToken: string) {
    this.integratedWidgetToken = integratedWidgetToken;
  }

  public setupWidgetLauncherElement() {
    if (
      !store.modules.widget.state.widgetContainerState[
        this.integratedWidgetToken
      ]
    )
      return;
    watch((get) => {
      const isLauncherVisible = get(store.modules.widget.state)
        .widgetContainerState[this.integratedWidgetToken].isLauncherVisible;
      const shouldShowLauncher = get(store.modules.widget.state)
        .widgetContainerState[this.integratedWidgetToken].shouldShowLauncher;

      if (
        !store.modules.widget.state.widgetContainerState[
          this.integratedWidgetToken
        ].isElementsMounted
      )
        return;

      const elementRefs = widgetElementsReferences(this.integratedWidgetToken);

      elementRefs.launcherIframe.style.visibility =
        !shouldShowLauncher || !isLauncherVisible ? "hidden" : "visible";
    });

    return `<iframe id="${
      store.modules.widget.state.widgetContainerState[
        this.integratedWidgetToken
      ].launcherFrameId
    }" frameborder="0" class="crowd-widget-launcher-frame" allowtransparency="true" style="height: 0;"></iframe>`;
  }

  public adjustWidgetLauncherPositionDimension(
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
  }
}
