const { createProxyMiddleware } = require('http-proxy-middleware');
const mockerApi = require('mocker-api');
const path = require('path');
const { MOCK, REACT_APP_PROXY_URL } = process.env;

module.exports = function (app) {
  if (MOCK === 'none') {
    createProxyMiddleware('/api', {
      target: REACT_APP_PROXY_URL,
      changeOrigin: true
    });
  } else {
    mockerApi(app, path.resolve('./mock'));
  }
};
