export const elementSelector = (attr: "id" | "class", selector: string) => {
  if (attr === "id") return document.getElementById(selector);
  else if (attr === "class") {
    const elements = document.getElementsByClassName(selector);
    if (elements.length > 0) {
      return elements[0];
    }
  } else {
    return null;
  }
};
