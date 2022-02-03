import {request} from "@shared/lib/request";

export interface Credentials {
  id: string;
  username: string;
  email: string;
  avatar: string;
}

export interface GetCredentialsResponse {
  credentials: Credentials;
}

const getCredentials = () =>
  request<GetCredentialsResponse>({
    url: "/api/auth/credentials",
  });

export const authApi = {
  getCredentials,
};
