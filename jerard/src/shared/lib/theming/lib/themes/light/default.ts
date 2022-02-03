import {createTheme} from "@mui/material";

import {common} from "../common";

export const dflt = createTheme({
  ...common,
  palette: {
    ...common.palette,
    primary: {
      main: "#8BE8E3",
      contrastText: "#000000",
    },
    secondary: {
      main: "#E0777D",
      contrastText: "#000000",
    },
    text: {
      primary: "#000000",
      secondary: "#505050",
    },
    background: {
      default: "#FFFFFF",
    },
    divider: "#E3E3E3",
  },
});
