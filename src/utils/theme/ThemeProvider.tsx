import React from "react";
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import theme from "./fundations";

interface ThemeProviderProps {
  children: React.ReactNode;
}
const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  return <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>;
};

export default ThemeProvider;
