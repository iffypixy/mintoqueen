import {createReducer} from "@reduxjs/toolkit";

import {Credentials} from "@shared/api/auth";

export interface AuthState {
  isAuthenticated: boolean;
  credentials: Credentials | null;
  isCredentialsFetchPending: boolean;
}

export const reducer = createReducer<AuthState>(
  {
    isAuthenticated: false,
    credentials: null,
    isCredentialsFetchPending: false,
  },
  {},
);
