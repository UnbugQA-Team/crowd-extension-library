import * as rrweb from "rrweb";
import rrwebPlayer from "rrweb-player";
import "rrweb-player/dist/style.css";
import { RecorderBodyClass } from "../constant";
import { ScreenRecordDoneEvent, WidgetEventType } from "../../../model/widget";
import { extensionBaseOriginUrl } from "../../../utils";
import { widgetElementsReferences } from ".";

let screenRecordEvent = [] as any;
let recorderObj = null as any;

const recordingFrameIndicator = document.createElement("div");
recordingFrameIndicator.classList.add("recording-frame");

export const startBugTrackingScreenRecording = () => {
  appendWidgetFrameToBody();
  clearRecording();
  recorderObj = rrweb.record({
    emit(event) {
      screenRecordEvent.push(event);
    },
    recordCanvas: true,
    //  blockClass: "controller-frame" // rr-block,
  });
};

export const stopBugTrackingScreenRecording = () => {
  generateHeightForPlayer();
  recorderObj();
  const playerContainer = document.getElementById(
    "record-player"
  ) as HTMLDivElement;
  emptyElement(playerContainer);
  setTimeout(() => {
    new rrwebPlayer({
      target: playerContainer,
      props: {
        events: screenRecordEvent,
        height: generateHeightForPlayer(),
        skipInactive: true,
      },
    });
  }, 200);
  removeWidgetFrameToBody();
};

export const clearRecording = () => {
  screenRecordEvent = [];
};

export const saveScreenRecording = () => {
  const elementRefs = widgetElementsReferences();
  const postMessageData: ScreenRecordDoneEvent = {
    eventType: WidgetEventType.ScreenRecordDone,
    payload: {
      recorderedEvent: screenRecordEvent,
    },
  };
  elementRefs.panelIframe.contentWindow?.postMessage(
    postMessageData,
    extensionBaseOriginUrl
  );
};

function emptyElement(element: HTMLElement) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

const appendWidgetFrameToBody = () => {
  document.body.classList.add(RecorderBodyClass);
  document.body.appendChild(recordingFrameIndicator);
};

const generateHeightForPlayer = () => {
  const windowHeight = window.innerHeight;
  const playerFrameElement = document.querySelector(
    ".record-player-frame"
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
};

const removeWidgetFrameToBody = () => {
  document.body.classList.remove(RecorderBodyClass);
};
