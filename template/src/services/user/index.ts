import { request } from '../base';
import type { Response, RequestConfig } from '../base/types';

// user types
import type { ParamsUserLogin, ResponseUserLogin, ParamsUserAccount, ResponseUserAccount } from './types';

/** 登录 GET /login */
export function userLogin(params: ParamsUserLogin, config?: RequestConfig): Response<ResponseUserLogin> {
  return request({
    url: '/api/login',
    method: 'get',
    params,
    ...config
  });
}

/** 账户 POST /account */
export function userAccount(params: ParamsUserAccount, config?: RequestConfig): Response<ResponseUserAccount> {
  return request({
    url: '/api/account',
    method: 'post',
    data: params,
    ...config
  });
}
