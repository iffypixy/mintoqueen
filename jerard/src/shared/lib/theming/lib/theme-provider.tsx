import * as React from "react";
import {ThemeProvider as MUIThemeProvider} from "@mui/material";
import {useSelector} from "react-redux";

import {selectors} from "../model";
import {light, dark} from "./themes";

export const ThemeProvider: React.FC = ({children}) => {
  const theme = useSelector(selectors.theme);

  const selected = theme === "light" ? light : dark;

  return <MUIThemeProvider theme={selected}>{children}</MUIThemeProvider>;
};
