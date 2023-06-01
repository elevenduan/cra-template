import axios from 'axios';
import merge from 'lodash/merge';
import { Toast } from 'antd-mobile';
import type { RequestConfig } from './types';

const { REACT_APP_API_URL, NODE_ENV } = process.env;

const defaultConfig = {
  baseURL: NODE_ENV === 'production' ? REACT_APP_API_URL : undefined,
  headers: { 'Content-Type': 'application/json' }
};

export function request(config: RequestConfig) {
  return axios(merge(defaultConfig, config))
    .then((res) => {
      const data = res.data;
      // success
      if (data.code === '0000') {
        return res.data;
      }
      // error
      return Promise.reject(res);
    })
    .catch((err) => {
      const res = err?.response || err;
      const data = res.data;

      // 网络请求异常，而非code码代表的服务处理失败
      if (res?.status !== 200) {
        Toast.show({ content: '请求异常' });
      }

      return Promise.reject(data);
    });
}
