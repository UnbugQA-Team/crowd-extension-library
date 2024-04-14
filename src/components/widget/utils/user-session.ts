import { generateId } from "../../../utils";
import { CrowdCookieLifetime, CrowdElementIdPrefix } from "../constant";

/**
 * Generates a unique ID and stores it in a cookie.
 *
 * @param {string} prefix - The prefix for the cookie name.
 * @param {number} cookieLifetime - The lifetime of the cookie in minutes.
 * @returns {void}
 */
export const generateWidgetUserIDAndStore = (): void => {
  // Calculate the expiration date for the cookie lifetime from now
  const expirationDate: Date = new Date();
  expirationDate.setTime(
    expirationDate.getTime() + Number(CrowdCookieLifetime) * 60 * 1000 // minutes to milliseconds
  );

  const cookieName: string = `${CrowdElementIdPrefix}-user-session`;
  const cookieValue: string = encodeURIComponent(
    generateId("crowd-widget-user-session")
  );
  const cookieExpires: string = expirationDate.toUTCString();
  const cookiePath: string = "/";

  const cookieItem: string = `${cookieName}=${cookieValue}; expires=${cookieExpires}; path=${cookiePath}`;

  document.cookie = cookieItem;
};

/**
 * Parses the cookie string to find the item with the given prefix.
 *
 * @param {string} prefix - The prefix to search for in the cookie string.
 * @return {boolean} Returns true if the item with the given prefix is found, false otherwise.
 */
export const getUserIDSession = (): boolean => {
  const cookieName = `${CrowdElementIdPrefix}-user-session`;
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

  return itemValue !== null;
};
