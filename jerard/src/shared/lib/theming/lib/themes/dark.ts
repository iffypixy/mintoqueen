import {createTheme} from "@mui/material";

import {common} from "./common";

export const dark = createTheme({
  ...common,
  palette: {
    primary: {},
    secondary: {},
    success: {},
    warning: {},
    error: {},
    text: {},
    background: {},
    action: {},
    divider: "",
    mode: "dark",
  },
});
