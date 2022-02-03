import {createAsyncThunk} from "@reduxjs/toolkit";

import {GetCredentialsResponse, authApi} from "@shared/api/auth";

const prefix = "auth";

export interface FetchCredentialsPaylaod extends GetCredentialsResponse {}

export const fetchCredentials = createAsyncThunk(
  `${prefix}/fetchCredentials`,
  async () => {
    const {data} = await authApi.getCredentials();

    return data;
  },
);
