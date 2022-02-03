import {combineReducers} from "redux";

import {authReducer} from "@features/auth";
import {themingReducer} from "@shared/lib/theming";

export const rootReducer = combineReducers({
  auth: authReducer,
  theming: themingReducer,
});
