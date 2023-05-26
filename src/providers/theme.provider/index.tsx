import React, { ReactNode, useContext, createContext } from "react";
import { ThemeProvider as StyleComponentThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: "#3b7eef",
    secondary: "#6c757d",
    background: "#f2f2f2",
    white: "#fff",
    grey: {
      100: "#dbdcdf",
      200: "#f4f5f5",
      300: "#707070",
      400: "#606060",
      500: "#505050",
      600: "#404040",
      700: "#303030",
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
