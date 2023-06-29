import axios from 'axios';
import { Toast } from 'antd-mobile';
import type { RequestConfig } from './types';

const { REACT_APP_API_URL, NODE_ENV } = process.env;

const defaultConfig = {
  baseURL: NODE_ENV === 'production' ? REACT_APP_API_URL : undefined,
  headers: { 'Content-Type': 'application/json' } // application/x-www-form-urlencoded // multipart/form-data
};

export function request(config: RequestConfig) {
  const params = Object.assign({}, defaultConfig, config);
  return axios(params)
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
