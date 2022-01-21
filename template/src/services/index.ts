import merge from 'lodash/merge';
import request, { AxiosPromise } from 'axios';
import { useRequest } from 'ahooks';

type Response<T> = AxiosPromise<{
  resCode: string;
  resMsg: string;
  data: T;
}>;

type Config = { [key: string]: any };

function mergeRequestConfig(...config: Config[]) {
  return merge({ headers: { 'Content-Type': 'application/json' } }, ...config);
}

function mergeHookConfig(...config: Config[]) {
  return merge({ manual: true }, ...config);
}

/** 登录 GET /login */
export function userLogin(
  params: { userId: number; userName: string; status?: 'available' | 'pending' | 'sold' },
  reqConfig?: Config
): Response<{
  id: number;
  username: string;
}> {
  return request({
    url: '/login',
    method: 'get',
    params,
    ...mergeRequestConfig(reqConfig || {})
  });
}

export function useUserLogin(hookConfig?: Config) {
  return useRequest(userLogin, ...mergeHookConfig(hookConfig || {}));
}

/** 账户 POST /account */
export function userAccount(
  data: {
    id: {
      accid?: string;
    }[];
    count?: string[];
  },
  reqConfig?: Config
): Response<API.Order> {
  return request({
    url: '/account',
    method: 'post',
    data,
    ...mergeRequestConfig(reqConfig || {})
  });
}

export function useUserAccoUnt(hookConfig?: Config) {
  return useRequest(userAccount, ...mergeHookConfig(hookConfig || {}));
}
