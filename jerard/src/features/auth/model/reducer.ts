import {createReducer} from "@reduxjs/toolkit";

interface AuthState {
  isAuthenticated: boolean;
}

export const reducer = createReducer<AuthState>(
  {
    isAuthenticated: false,
  },
  {},
);
