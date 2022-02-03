import * as React from "react";
import {ThemeProvider as MUIThemeProvider} from "@mui/material";
import {useSelector} from "react-redux";

import {selectors} from "../model";
import {themes} from "./themes";

const map = {
  "light:default": themes.light.dflt,
  "dark:default": themes.dark.dflt,
};

export const ThemeProvider: React.FC = ({children}) => {
  const theme = useSelector(selectors.theme);

  const selected = map[theme];

  return <MUIThemeProvider theme={selected}>{children}</MUIThemeProvider>;
};
