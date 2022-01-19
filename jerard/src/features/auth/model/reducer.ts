import {createReducer, PayloadAction} from "@reduxjs/toolkit";

import {Credentials} from "@shared/api/auth";
import * as actions from "./actions";
import {FetchCredentialsPaylaod} from "./actions";

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
  {
    [actions.fetchCredentials.pending.type]: (state) => {
      state.isCredentialsFetchPending = true;
    },

    [actions.fetchCredentials.fulfilled.type]: (
      state,
      {payload}: PayloadAction<FetchCredentialsPaylaod>,
    ) => {
      state.isCredentialsFetchPending = false;
      state.isAuthenticated = true;
      state.credentials = payload.credentials;
    },

    [actions.fetchCredentials.rejected.type]: (state) => {
      state.isCredentialsFetchPending = false;
    },
  },
);
