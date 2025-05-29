import { ignoredCrowdUnmoderatedTestName } from "../../../constant";
import {
  DeviceSupported,
  PromptDisplayRule,
} from "../../../model/userTest-prompt";
import store from "../../../store";
import {
  checkPageCompatibilityTargetedPages,
  getDeviceType,
  unmoderatedTestBaseUrl,
  urlPathQuery,
} from "../../../utils";
import { elementSelector } from "../../../utils/dom_utils";

export const PromptReshowOptions = [
  { label: "Do not reshow", value: "0_hours" },
  { label: "Reshow after 24 hours", value: "24_hours" },
  { label: "Reshow after 3 days", value: "72_hours" },
  { label: "Reshow after 1 week", value: "168_hours" },
];

/**
 * @method storeUnmoderatedTestId
 * @param cookieName
 * @param testId
 * @param cookieLifetime
 *
 * @description This function stores the last unmoderated test session testId
 */
export const storeUnmoderatedTestId = (
  cookieName: string,
  testIds: string[],
  cookieLifetime: number
) => {
  // Calculate the expiration date for 4 hours from now
  const expirationDate = new Date();
  expirationDate.setTime(
    expirationDate.getTime() + cookieLifetime * 24 * 60 * 60 * 1000
  ); // 4 hours in milliseconds
  const cookieItem = `${cookieName}=${encodeURIComponent(
    JSON.stringify(testIds)
  )}; expires=${expirationDate.toUTCString()}; path=/`;
  document.cookie = cookieItem;
};

/**
 * @method getStoredUnmoderatedTestId
 * @param prefix
 * @returns  string
 *
 * @description This function get the last unmoderated test session testId
 */
export const getStoredUnmoderatedTestId = (cookieName: string): string[] => {
  const cookies = document.cookie;

  // Parse the cookie string to find the item
  const cookieItems = cookies.split(";");
  let itemValue = null;

  cookieItems.forEach((cookieItem) => {
    const [name, value] = cookieItem.trim().split("=");
    if (name === cookieName) {
      itemValue = JSON.parse(decodeURIComponent(value));
    }
  });

  return itemValue === null ? [] : itemValue;
};

export const storeIgnoredUnmoderatedTestId = (
  value: string,
  cookieLifetime: number
) => {
  const cookieName = `${ignoredCrowdUnmoderatedTestName}-${new Date().getTime()}`;
  // Calculate the expiration date for 4 hours from now
  const expirationDate = new Date();
  expirationDate.setTime(
    expirationDate.getTime() + cookieLifetime * 24 * 60 * 60 * 1000
  ); // 4 hours in milliseconds
  const cookieItem = `${cookieName}=${encodeURIComponent(
    value
  )}; expires=${expirationDate.toUTCString()}; path=/`;
  document.cookie = cookieItem;
};
export const getAllIgnoredUnmoderatedTestId = () => {
  const regex = new RegExp(`^${ignoredCrowdUnmoderatedTestName}`);
  const cookies = document.cookie;

  // Parse the cookie string to find the item
  const cookieItems = cookies.split(";");
  const matchedCookies = [];

  for (let cookie of cookieItems) {
    const [name, value] = cookie.split("=").map((c) => c.trim());
    if (regex.test(name)) {
      matchedCookies.push(value);
    }
  }

  return matchedCookies;
};

export const getPeriodToReshowPrompt = (value: string) => {
  const optionIndex = PromptReshowOptions.findIndex(
    (item) => item.value === value
  );
  if (optionIndex !== 1) {
    const durationValue = PromptReshowOptions[optionIndex].value;
    const actualDuration = durationValue.split("_")[0];
    if (Number(actualDuration) === 0) return 180;
    return Number(actualDuration) / 24;
  } else {
    return 180;
  }
};

/**
 * Retrieves references to various widget elements.
 *
 * @returns {Object} Object containing references to widget elements
 * @throws {Error} If the widget container ID, panel frame wrapper ID, panel frame ID, launcher frame ID,
 * controller frame ID, or controller frame wrapper ID is not found in the store.
 */
export const userTestPromptElementsReferences = (
  workspaceId: string
): {
  parentWrapper: HTMLDivElement;
  panelContainerElement: HTMLDivElement;
  panelIframe: HTMLIFrameElement;
} => {
  const promptParentContainerId: string =
    store.modules.userTestPrompt.state.userTestPromptContainerState[workspaceId]
      .promptParentContainerId;
  const promptContainerId: string =
    store.modules.userTestPrompt.state.userTestPromptContainerState[workspaceId]
      .promptContainerId;
  const panelFrameWrapperId: string =
    store.modules.userTestPrompt.state.userTestPromptContainerState[workspaceId]
      .panelFrameWrapperId;

  const parentWrapper: HTMLDivElement = elementSelector(
    "id",
    promptParentContainerId
  ) as HTMLDivElement;
  if (!parentWrapper) {
    throw new Error(`Element with ID "${promptParentContainerId}" not found`);
  }

  const panelContainerElement: HTMLDivElement = elementSelector(
    "id",
    promptContainerId
  ) as HTMLDivElement;
  if (!panelContainerElement) {
    throw new Error(`Element with ID "${promptContainerId}" not found`);
  }

  const panelIframe: HTMLIFrameElement = elementSelector(
    "id",
    panelFrameWrapperId
  ) as HTMLIFrameElement;
  if (!panelIframe) {
    throw new Error(`Element with ID "${panelFrameWrapperId}" not found`);
  }

  return {
    parentWrapper,
    panelContainerElement,
    panelIframe,
  };
};

export const userTestPromptFrameEndpoint = (
  integrationToken: string
): {
  panelEndpoint: string;
} => {
  return {
    panelEndpoint: `${unmoderatedTestBaseUrl}/${urlPathQuery(
      integrationToken
    )}`,
  };
};

const checkDeviceCompatibilityForPrompt = (
  supportedDevices: DeviceSupported
) => {
  const visitorsDeviceType = getDeviceType();
  return (
    (visitorsDeviceType === "Mobile" && supportedDevices.mobile) ||
    (visitorsDeviceType === "Desktop" && supportedDevices.desktop) ||
    (visitorsDeviceType === "Tablet" && supportedDevices.tablet)
  );
};

export const checkDeviceAndPageCompatibility = async (
  data: PromptDisplayRule
) => {
  if (data.visibilityOption === "ALLPAGES") {
    return {
      position: data.promptPosition,
    };
  } else if (data.visibilityOption === "SPECIFICPAGES") {
    const pageUrlCompatibility = data.targetPages.filter((item) =>
      checkPageCompatibilityTargetedPages(item.optionName, item.optionValue)
    );

    // console.log(pageUrlCompability);

    if (
      checkDeviceCompatibilityForPrompt(data.deviceSupported) &&
      pageUrlCompatibility.length > 0
    ) {
      return {
        position: data.promptPosition,
      };
    } else {
      return false;
    }
  } else {
    return false;
  }
};
