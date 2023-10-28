export const generateId = (suffix: string): string => {
  return `${suffix}-${new Date().getTime()}${Math.floor(Math.random() * 100)}`;
};

export const getClientSiteDomain = () => {
  const currentURL = window.location.href;
  const url = new URL(currentURL);
  return {
    hostname: url.hostname,
    origin: url.origin,
  };
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
