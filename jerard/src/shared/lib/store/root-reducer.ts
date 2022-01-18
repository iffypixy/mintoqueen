import {combineReducers} from "redux";

import {authReducer} from "@features/auth";

export const rootReducer = combineReducers({
  auth: authReducer,
});
