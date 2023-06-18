import { injectGlobal, cx, css } from "@emotion/css";

const injectGlobalStyle = (...styles: ReturnType<typeof css>[]) => {
  const GlobalStyle = () => {
    injectGlobal`
        ${cx(styles)}
    `;
    return <></>;
  };

  return { GlobalStyle };
};

export default injectGlobalStyle;
