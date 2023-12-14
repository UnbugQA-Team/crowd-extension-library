import {
  checkPageCompabilityTargetedPages,
  generateId,
  getDeviceType,
} from "../../utils";
import { WidgetDisplayRules, WidgetTargetPage } from "../model";

export const generateWidgetUserIDAndStore = (
  prefix: string,
  cookieLifetime: number
) => {
  // Calculate the expiration date for 4 hours from now
  const expirationDate = new Date();
  expirationDate.setTime(
    expirationDate.getTime() + cookieLifetime * 60 * 60 * 1000
  ); // 4 hours in milliseconds
  const cookieItem = `${prefix}-user-session=${encodeURIComponent(
    generateId("crowd-widget-user-session")
  )}; expires=${expirationDate.toUTCString()}; path=/`;
  document.cookie = cookieItem;
};

export const getUserIDSession = (prefix: string) => {
  const cookieName = `${prefix}-user-session`;
  const cookies = document.cookie;

  // Parse the cookie string to find the item
  const cookieItems = cookies.split(";");
  let itemValue = null;

  cookieItems.forEach((cookieItem) => {
    const [name, value] = cookieItem.trim().split("=");
    if (name === cookieName) {
      itemValue = decodeURIComponent(value);
    }
  });

  return itemValue === null ? false : true;
};

const checkDeviceCompabilityForWidget = (supportedDevices: string[]) => {
  const visitorsDeviceType = getDeviceType().toLowerCase();
  return supportedDevices.includes(visitorsDeviceType);
};

export const checkDeviceAndPageCompabilityForWidget = async (
  data: WidgetDisplayRules
) => {
  if (
    checkDeviceCompabilityForWidget(data.devices) &&
    data.visibilityOption === "ALLPAGES"
  ) {
    return {
      position: data.position,
      showAfter: data.showWidgetAfter,
    };
  } else if (
    checkDeviceCompabilityForWidget(data.devices) &&
    data.visibilityOption === "SPECIFICPAGES"
  ) {
    const targetedPages = JSON.parse(data.targetPages) as WidgetTargetPage[];
    const pageUrlCompability = targetedPages.filter((item) =>
      checkPageCompabilityTargetedPages(item.optionName, item.optionValue)
    );

    if (
      checkDeviceCompabilityForWidget(data.devices) &&
      pageUrlCompability.length > 0
    ) {
      return {
        position: data.position,
        showAfter: data.showWidgetAfter,
      };
    } else {
      return false;
    }
  } else {
    return false;
  }
};

export const enableControllerDragging = (element: any) => {
  let pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;

  // Function to handle mouse down event
  function dragMouseDown(e: any) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  // Function to handle mouse move event
  function elementDrag(e: any) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    element.style.top = element.offsetTop - pos2 + "px";
    element.style.left = element.offsetLeft - pos1 + "px";
  }

  // Function to handle mouse up event
  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }

  // Attach the event listener to the iframe
  element.onmousedown = dragMouseDown;
};
