import axios from 'axios';
import merge from 'lodash/merge';
import { Toast } from 'antd-mobile';
import type { RequestConfig } from './types';

const defaultRequestConfig = {
  headers: { 'Content-Type': 'application/json' }
};

export function mergeRequestConfig(config?: RequestConfig) {
  return merge(defaultRequestConfig, config);
}

export function request(config: RequestConfig) {
  return axios(config)
    .then((res) => {
      return res.data;
    })
    .catch(() => Toast.show({ content: '请求异常' }));
}
