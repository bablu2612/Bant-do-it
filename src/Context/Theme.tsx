import React from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      orange: string;
      purple: string;
      black: string;
      pink: string;
      gardientSite: string;
    };
    fontSizes: {
      small: string;
      medium: string;
      large: string;
    };
    fonts: string[];
  }
}

const theme: DefaultTheme = {
  colors: {
    orange: "#EA862C",
    // purple: " #572B73",
    purple: "#1d619f",
    black: "#040404",
    pink: " #A31265",
    gardientSite: "linear-gradient(90deg, rgba(235,240,244,1) 0%, rgba(166,192,216,1) 50%, rgba(29,97,159,1) 100%);"
  },
  fonts: ["sans-serif", "Roboto"],
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em",
  },
};

const Theme: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
