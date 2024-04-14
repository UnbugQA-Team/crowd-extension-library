import { watch } from "valtio/utils";
import store from "../../store";
import { widgetElementsReferences } from "./utils";
import { clearRecording, saveScreenRecording } from "./utils/screen-recorder";

/**
 * Generate the Recorder Controller Element HTML.
 *
 * @param store - The store object.
 * @returns The HTML for the Recorder Controller Element.
 */
export const RecorderControllerElement = () => {
  watch((get) => {
    const isControllerVisible = get(
      store.modules.widget.state
    ).isControllerVisible;
    if (!store.modules.widget.state.isElementsMounted) return;
    const elementRefs = widgetElementsReferences();
    if (!isControllerVisible) {
      elementRefs.controllerWapper.style.visibility = "hidden";
    } else {
      elementRefs.controllerWapper.style.visibility = "visible";
    }
  });

  const { controllerFrameWrapperId, controllerFrameId } =
    store.modules.widget.state;

  return `<div id="${controllerFrameWrapperId}" class="controller-frame crowd-block rr-block " style="visibility: hidden;">
            <div class="controller-wrapper" style="background-color: white !important;">
              <div class="controller-drag">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                  </svg>
              </div>
              <iframe id="${controllerFrameId}" frameborder="0" allowtransparency="true"></iframe>
            </div>
        </div>`;
};

/**
 * Function to create a Recorder Preview Element.
 *
 * @return {string} The HTML string representing the Recorder Preview Element.
 */
export const RecorderPreviewElement = () => {
  watch((get) => {
    const isRecordPlayerVisible = get(
      store.modules.widget.state
    ).isRecordPlayerVisible;
    if (!store.modules.widget.state.isElementsMounted) return;
    const elementRefs = widgetElementsReferences();
    if (!isRecordPlayerVisible) {
      elementRefs.playerFrame.style.visibility = "hidden";
    } else {
      elementRefs.playerFrame.style.visibility = "visible";
    }
  });

  const { screenRecordPlayerFrameId } = store.modules.widget.state;

  return `<div id="${screenRecordPlayerFrameId}" class="record-player-frame" style="visibility: hidden;">
            <div class="player-action">
                <button type="button" id="delete-screen-record">Cancel</button>
                <button type="button" id="save-screen-record">Save video</button>
            </div>
            <div class="crowd-player-container" id="record-player"></div>
        </div>`;
};

export const assignListenerToControlButton = () => {
  document
    .getElementById("delete-screen-record")
    ?.addEventListener("click", () => {
      clearRecording();
      document.body.classList.remove("show-crowd-player");
      store.modules.widget.action.updateWidgetSectionVisibility({
        isRecordPlayerVisible: false,
        isPanelVisible: true,
      });
    });
  document
    .getElementById("save-screen-record")
    ?.addEventListener("click", () => {
      saveScreenRecording();

      document.body.classList.remove("show-crowd-player");
      store.modules.widget.action.updateWidgetSectionVisibility({
        isRecordPlayerVisible: false,
        isPanelVisible: true,
      });
    });
};
