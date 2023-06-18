import { css } from "@emotion/css";

export const resetStyle = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ul,
  ol {
    list-style: none;
  }

  html {
    font-size: 14px;
  }

  body {
    font-size: 100%;
    font-family: sans-serif;
  }
`;
