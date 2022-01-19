import axios, {AxiosRequestConfig, AxiosPromise} from "axios";

const ax = axios.create({
  baseURL: process.env.BACKEND_URL,
  withCredentials: true,
});

export const request = <T>(options: AxiosRequestConfig): AxiosPromise<T> =>
  ax(options);
