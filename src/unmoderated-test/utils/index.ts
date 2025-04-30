import {
  PromptReshowOptions,
  checkPageCompatibilityTargetedPages,
  getDeviceType,
} from "../../utils";
import { DeviceSupported, PromptDisplayRule } from "../model";

export const unmoderatedTestPromptPrefix = "unmoderated-test";
export const ignoredCrowdUmoderatedTestName = "crowd-ignored-unmoderated-test";
export const answeredCrowdUmoderatedTestName =
  "crowd-answered-unmoderated-test";

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
  const cookieName = `${ignoredCrowdUmoderatedTestName}-${new Date().getTime()}`;
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
  const regex = new RegExp(`^${ignoredCrowdUmoderatedTestName}`);
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

const checkDeviceCompabilityForPrompt = (supportedDevices: DeviceSupported) => {
  const visitorsDeviceType = getDeviceType();
  return (
    (visitorsDeviceType === "Mobile" && supportedDevices.mobile) ||
    (visitorsDeviceType === "Desktop" && supportedDevices.desktop) ||
    (visitorsDeviceType === "Tablet" && supportedDevices.tablet)
  );
};

export const checkDeviceAndPageCompability = async (
  data: PromptDisplayRule
) => {
  if (data.visibilityOption === "ALLPAGES") {
    return {
      position: data.promptPosition,
    };
  } else if (data.visibilityOption === "SPECIFICPAGES") {
    const pageUrlCompability = data.targetPages.filter((item) =>
      checkPageCompatibilityTargetedPages(item.optionName, item.optionValue)
    );

    // console.log(pageUrlCompability);

    if (
      checkDeviceCompabilityForPrompt(data.deviceSupported) &&
      pageUrlCompability.length > 0
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
