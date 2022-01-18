import {createReducer} from "@reduxjs/toolkit";

export interface AuthState {
  isAuthenticated: boolean;
}

export const reducer = createReducer<AuthState>(
  {
    isAuthenticated: false,
  },
  {},
);
