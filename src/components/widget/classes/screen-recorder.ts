import { watch } from "valtio/utils";
import { widgetElementsReferences } from "../utils";
import store from "../../../store";
import * as rrweb from "rrweb";
import rrwebPlayer from "rrweb-player";
import "rrweb-player/dist/style.css";
import { RecorderBodyClass } from "../../../constant";
import { ScreenRecordDoneEvent, WidgetEventType } from "../../../model/widget";
import { extensionBaseOriginUrl } from "../../../utils";

export class CrowdWidgetScreenRecorder {
  private integratedWidgetToken: string = "";

  private screenRecordEvent = [] as any;
  private recorderObj = null as any;

  constructor(integratedWidgetToken: string) {
    this.integratedWidgetToken = integratedWidgetToken;
  }

  public setupWidgetScreenRecorderElement() {
    if (
      !store.modules.widget.state.widgetContainerState[
        this.integratedWidgetToken
      ]
    )
      return;
    watch((get) => {
      const isControllerVisible = get(store.modules.widget.state)
        .widgetContainerState[this.integratedWidgetToken].isControllerVisible;
      if (
        !store.modules.widget.state.widgetContainerState[
          this.integratedWidgetToken
        ].isElementsMounted
      )
        return;
      const elementRefs = widgetElementsReferences(this.integratedWidgetToken);
      if (!isControllerVisible) {
        elementRefs.controllerWrapper.style.visibility = "hidden";
      } else {
        elementRefs.controllerWrapper.style.visibility = "visible";
      }
    });

    const { controllerFrameWrapperId, controllerFrameId } =
      store.modules.widget.state.widgetContainerState[
        this.integratedWidgetToken
      ];

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
  }

  public setupWidgetScreenRecorderPreviewElement() {
    if (
      !store.modules.widget.state.widgetContainerState[
        this.integratedWidgetToken
      ]
    )
      return;
    watch((get) => {
      const isRecordPlayerVisible = get(store.modules.widget.state)
        .widgetContainerState[this.integratedWidgetToken].isRecordPlayerVisible;
      if (
        !store.modules.widget.state.widgetContainerState[
          this.integratedWidgetToken
        ].isElementsMounted
      )
        return;
      const elementRefs = widgetElementsReferences(this.integratedWidgetToken);

      if (!isRecordPlayerVisible) {
        elementRefs.playerFrame.style.visibility = "hidden";
      } else {
        elementRefs.playerFrame.style.visibility = "visible";
      }
    });

    const { screenRecordPlayerFrameId } =
      store.modules.widget.state.widgetContainerState[
        this.integratedWidgetToken
      ];

    return `<div id="${screenRecordPlayerFrameId}" class="record-player-frame" style="visibility: hidden;">
                    <div class="player-action">
                        <button type="button" id="delete-screen-record-${this.integratedWidgetToken}">Cancel</button>
                        <button type="button" id="save-screen-record-${this.integratedWidgetToken}">Save video</button>
                    </div>
                    <div class="crowd-player-container" id="record-player-${this.integratedWidgetToken}"></div>
                </div>`;
  }

  public assignListenerToControlButton() {
    document
      .getElementById(`delete-screen-record-${this.integratedWidgetToken}`)
      ?.addEventListener("click", () => {
        this.clearRecording();
        document.body.classList.remove("show-crowd-player");
        store.modules.widget.action.updateWidgetSectionVisibility(
          this.integratedWidgetToken,
          {
            isRecordPlayerVisible: false,
            isPanelVisible: true,
          }
        );
      });
    document
      .getElementById(`save-screen-record-${this.integratedWidgetToken}`)
      ?.addEventListener("click", () => {
        this.saveScreenRecording(this.integratedWidgetToken);

        document.body.classList.remove("show-crowd-player");
        store.modules.widget.action.updateWidgetSectionVisibility(
          this.integratedWidgetToken,
          {
            isRecordPlayerVisible: false,
            isPanelVisible: true,
          }
        );
      });
  }

  startBugTrackingScreenRecording() {
    this.appendWidgetFrameToBody();
    this.clearRecording();
    this.recorderObj = rrweb.record({
      emit: (event) => {
        this.screenRecordEvent.push(event);
      },
      recordCanvas: true,
      //  blockClass: "controller-frame" // rr-block,
    });
  }

  stopBugTrackingScreenRecording() {
    this.generateHeightForPlayer();
    this.recorderObj();
    const playerContainer = document.getElementById(
      `record-player-${this.integratedWidgetToken}`
    ) as HTMLDivElement;
    this.emptyElement(playerContainer);
    setTimeout(() => {
      new rrwebPlayer({
        target: playerContainer,
        props: {
          events: this.screenRecordEvent,
          height: this.generateHeightForPlayer(),
          skipInactive: true,
        },
      });
    }, 200);
    this.removeWidgetFrameToBody();
  }

  clearRecording() {
    this.screenRecordEvent = [];
  }

  saveScreenRecording(widgetToken: string) {
    const elementRefs = widgetElementsReferences(widgetToken);
    const postMessageData: ScreenRecordDoneEvent = {
      eventType: WidgetEventType.ScreenRecordDone,
      token: widgetToken,
      payload: {
        recordedEvent: this.screenRecordEvent,
      },
    };
    elementRefs.panelIframe.contentWindow?.postMessage(
      postMessageData,
      extensionBaseOriginUrl
    );
  }

  emptyElement(element: HTMLElement) {
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
  }

  appendWidgetFrameToBody() {
    const recordingFrameIndicator = document.createElement("div");
    recordingFrameIndicator.classList.add("recording-frame");
    document.body.classList.add(RecorderBodyClass);
    document.body.appendChild(recordingFrameIndicator);
  }

  generateHeightForPlayer() {
    const { screenRecordPlayerFrameId } =
      store.modules.widget.state.widgetContainerState[
        this.integratedWidgetToken
      ];
    const windowHeight = window.innerHeight;
    const playerFrameElement = document.getElementById(
      screenRecordPlayerFrameId
    ) as HTMLDivElement;
    if (playerFrameElement) {
      const computedStyle = window.getComputedStyle(playerFrameElement);
      const paddingTop = parseInt(
        computedStyle.getPropertyValue("padding-top"),
        10
      );
      const playerHeight = windowHeight - (paddingTop * 2 + 60 + 20);

      return playerHeight;
    }
    return 0;
  }

  removeWidgetFrameToBody() {
    document.body.classList.remove(RecorderBodyClass);
  }
}
