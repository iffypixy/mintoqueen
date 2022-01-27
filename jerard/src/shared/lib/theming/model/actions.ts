import {createAction} from "@reduxjs/toolkit";

import {Theme} from "./reducer";

const prefix = "theming";

export interface SetThemePayload {
  theme: Theme;
}

export const setTheme = createAction<SetThemePayload>(`${prefix}/setTheme`);
