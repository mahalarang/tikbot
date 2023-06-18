import ReactDom from "react-dom";
import App from "./App";
import { ThemeProvider } from "@/utils/theme";
import SiteGuard from "@/components/SiteGuard";
import { GlobalContextProvider } from "./context";
import { injectGlobalStyle } from "@utils/globalStyle";
import { resetStyle } from "@styles/reset";

const { GlobalStyle } = injectGlobalStyle(resetStyle);

ReactDom.render(
  <SiteGuard>
    <GlobalStyle />
    <ThemeProvider>
      <GlobalContextProvider>
        <App />
      </GlobalContextProvider>
    </ThemeProvider>
  </SiteGuard>,
  document.getElementById("app")
);
