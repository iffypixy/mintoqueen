import {createReducer, PayloadAction} from "@reduxjs/toolkit";

import {SetThemePayload} from "./actions";
import * as actions from "./actions";

export type Theme = "light" | "dark";

export interface ThemingState {
  theme: Theme;
}

export const reducer = createReducer<ThemingState>(
  {
    theme: "light",
  },
  {
    [actions.setTheme.type]: (
      state,
      {payload}: PayloadAction<SetThemePayload>,
    ) => {
      state.theme = payload.theme;
    },
  },
);
