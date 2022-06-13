import { AxiosPromise, AxiosRequestConfig } from 'axios';

export type Response<T> = AxiosPromise<{
  resCode: string;
  resMsg: string;
  data: T;
}>;

export type RequestConfig = AxiosRequestConfig;
