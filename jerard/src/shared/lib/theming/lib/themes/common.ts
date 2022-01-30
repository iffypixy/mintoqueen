import {ThemeOptions} from "@mui/material";

const fontFamily = "Brutal Type";

export const common: ThemeOptions = {
  breakpoints: {
    keys: ["xs", "sm", "md", "lg", "xl"],
    values: {
      xs: 576,
      sm: 768,
      md: 992,
      lg: 1200,
      xl: 1400,
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
    h1: {
      fontFamily,
      fontSize: "4.8rem",
      fontWeight: 400,
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
};
