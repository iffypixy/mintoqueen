import * as React from "react";
import {ThemeProvider} from "@mui/material";
import {useSelector} from "react-redux";

import {selectors} from "../model";
import {light, dark} from "./themes";

export const ThemingProvider: React.FC = ({children}) => {
  const theme = useSelector(selectors.theme);

  const selected = theme === "light" ? light : dark;

  return <ThemeProvider theme={selected}>{children}</ThemeProvider>;
};
