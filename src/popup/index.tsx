import ReactDom from "react-dom";
import App from "./App";
import ThemeProvider from "@/components/theme";
import "../assets/css/reset.css";

ReactDom.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById("app")
);
