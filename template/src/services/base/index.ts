import axios from 'axios';
import merge from 'lodash/merge';
import { Toast } from 'antd-mobile';
import type { RequestConfig } from './types';

const defaultConfig = {
  headers: { 'Content-Type': 'application/json' }
};

export function request(config: RequestConfig) {
  return axios(merge(defaultConfig, config))
    .then((res) => {
      return res.data;
    })
    .catch(() => Toast.show({ content: '请求异常' }));
}
