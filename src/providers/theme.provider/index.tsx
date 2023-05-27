import React, { ReactNode } from "react";
import {
  ThemeProvider as StyleComponentThemeProvider,
  useTheme as useStyledTheme,
  DefaultTheme,
} from "styled-components";

const theme = {
  colors: {
    primary: "#3b7eef",
    secondary: "#6c757d",
    background: "#f2f2f2",
    white: "#fff",
    grey: {
      "50": "#f7f7f7",
      "100": "#e3e3e3",
      "200": "#c8c8c8",
      "300": "#a4a4a4",
      "400": "#818181",
      "500": "#666666",
      "600": "#515151",
      "700": "#434343",
      "800": "#383838",
      "900": "#313131",
      "950": "#000000",
    },
  },
  fontSizes: {
    sm: "12px",
    md: "18px",
    l: "32px",
    xl: "64px",
  },
};

const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <StyleComponentThemeProvider theme={theme}>
      {children}
    </StyleComponentThemeProvider>
  );
};

export default ThemeProvider;
