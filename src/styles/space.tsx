import { css } from "@emotion/css";

const generateCssValue = (val: number | string) => {
  return typeof val === "number" ? `${val}px` : val;
};

type MarginPropertyType = {
  top?: number | string;
  left?: number | string;
  bottom?: number | string;
  right?: number | string;
};
export const margin = (value: number | string | MarginPropertyType) => {
  if (Object.prototype.toString.call(value) === "[object Object]") {
    let styles = "";
    for (const [key, val] of Object.entries(value)) {
      styles += `margin-${key}: ${generateCssValue(val)};`;
    }

    return css`
      ${styles}
    `;
  }

  return css`
    margin: ${generateCssValue(value as number | string)};
  `;
};
