const devCrowdOrigin = "http://localhost:2222";
const prodCrowdOrigin = "https://extension.crowdapp.io";

export const extensionBaseOriginUrl = import.meta.env.DEV
  ? devCrowdOrigin
  : prodCrowdOrigin;

export const unmoderatedTestBaseUrl = `${extensionBaseOriginUrl}/extension/unmoderated-test`;
export const widgetBaseUrl = `${extensionBaseOriginUrl}/extension/widget`;

export const generateId = (suffix: string): string => {
  return `${suffix}-${new Date().getTime()}${Math.floor(Math.random() * 100)}`;
};

export const getExtensionOriginUrl = (): string => {
  if ((window as any).CrowdApp && (window as any).CrowdApp.environment) {
    const crowd_environment = (window as any).CrowdApp.environment;
    return crowd_environment;
  } else if ((window as any).CrowdApp) {
    return "production";
  } else {
    return "production";
  }
};

export const getClientSiteDomain = () => {
  const currentURL = window.location.href;
  const url = new URL(currentURL);
  return {
    hostname: encodeURIComponent(url.hostname),
    host: encodeURIComponent(url.host),
    protocol: encodeURIComponent(url.protocol),
    origin: encodeURIComponent(url.origin),
  };
};

export const urlPathQuery = (integrationToken: string) => {
  return `?token=${encodeURIComponent(
    integrationToken
  )}&domain=${encodeURIComponent(
    getClientSiteDomain().hostname
  )}&host_origin=${encodeURIComponent(
    getClientSiteDomain().host
  )}&protocol=${encodeURIComponent(
    getClientSiteDomain().protocol
  )}&env=${getExtensionOriginUrl()}`;
};

export const getDeviceType = () => {
  const userAgent = navigator.userAgent;
  if (
    /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)
  ) {
    return "Mobile";
  } else if (/Tablet|iPad/i.test(userAgent)) {
    return "Tablet";
  } else {
    return "Desktop";
  }
};

export const PromptPosition = [
  //   { label: 'Middle left', value: 'middle_left' },
  //   { label: 'Middle right', value: 'middle_right' },
  { label: "Bottom left", value: "bottom_left" },
  { label: "Bottom right", value: "bottom_right" },
];

export const PromptVisibilityOptions = [
  { label: "All pages", value: "ALLPAGES" },
  { label: "Specific pages", value: "SPECIFICPAGES" },
];

export const PromptReshowOptions = [
  { label: "Do not reshow", value: "0_hours" },
  { label: "Reshow after 24 hours", value: "24_hours" },
  { label: "Reshow after 3 days", value: "72_hours" },
  { label: "Reshow after 1 week", value: "168_hours" },
];

export const checkPageCompabilityTargetedPages = (
  specificPageOption: string,
  specificPageValue: string
) => {
  const currentUrl = specificPageValue.endsWith("/")
    ? window.location.href
    : window.location.href.replace(/\/$/, "");

  const currentUrlObject = new URL(currentUrl);

  console.log(currentUrlObject, currentUrl);

  if (specificPageValue.includes(currentUrlObject.origin)) {
    currentUrlObject.pathname = currentUrl;
  }

  console.log(currentUrlObject.pathname, specificPageValue, currentUrl);

  if (specificPageOption === "start_with") {
    return currentUrlObject.pathname.startsWith(specificPageValue);
    // return currentUrl.startsWith(specificPageValue);
  } else if (specificPageOption === "end_with") {
    return currentUrlObject.pathname.endsWith(specificPageValue);
  } else if (specificPageOption === "contains") {
    return currentUrlObject.pathname.includes(specificPageValue);
  } else if (specificPageOption === "exactly_matches") {
    return currentUrlObject.pathname === specificPageValue;
  } else if (specificPageOption === "is_not") {
    return currentUrlObject.pathname !== specificPageValue;
  } else if (specificPageOption === "matches_regex") {
    const regexPattern = new RegExp(specificPageValue, "i");
    return regexPattern.test(currentUrlObject.pathname);
  } else {
    return false;
  }
};
