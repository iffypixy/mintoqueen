import {createTheme} from "@mui/material";

import {common} from "./common";

export const light = createTheme({
  ...common,
  palette: {
    primary: {},
    secondary: {},
    success: {
      light: "#9AE6B4",
      main: "#48BB78",
      dark: "#2F855A",
    },
    warning: {},
    error: {
      light: "#FEB2B2",
      main: "#F56565",
      dark: "#C53030",
    },
    text: {
      primary: "#202020",
      secondary: "#464848",
      disabled: "#A6A6A6",
    },
    background: {
      default: "#EBECF0",
    },
    divider: "#BCBCBC",
    action: {
      disabled: "#B1B1B1",
      disabledBackground: "#E6E6E6",
    },
    mode: "light",
  },
});
