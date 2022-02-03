import {ThemeOptions} from "@mui/material";

const fontFamily = "Brutal Type";

export const common: ThemeOptions = {
  breakpoints: {
    keys: ["xs", "sm", "md", "lg", "xl"],
    values: {
      xs: 320,
      sm: 481,
      md: 641,
      lg: 961,
      xl: 1025,
    },
  },
  shape: {
    borderRadius: "8px",
  },
  direction: "ltr",
  typography: {
    fontFamily,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    htmlFontSize: 10,
    fontSize: 16,
    h1: {
      fontFamily,
      fontSize: "5rem",
      fontWeight: 700,
      lineHeight: 1,
    },
    h2: {
      fontFamily,
      fontSize: "2.8rem",
      fontWeight: 400,
      lineHeight: 1.4,
    },
    h3: {
      fontFamily,
      fontSize: "1.8rem",
      fontWeight: 500,
      lineHeight: 1.4,
    },
    h4: {
      fontFamily,
      fontSize: "1.6rem",
      fontWeight: 500,
      lineHeight: 1.4,
    },
    h5: {
      fontFamily,
      fontSize: "1.4rem",
      fontWeight: 500,
      lineHeight: 1.4,
    },
    h6: {
      fontFamily,
      fontSize: "1.2rem",
      fontWeight: 500,
      lineHeight: 1.4,
    },
  },
  palette: {
    success: {
      light: "#9AE6B4",
      main: "#48BB78",
      dark: "#2F855A",
    },
    error: {
      light: "#FEB2B2",
      main: "#F56565",
      dark: "#C53030",
    },
  },
};
