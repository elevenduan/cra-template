const { createProxyMiddleware } = require('http-proxy-middleware');
const { MOCK, REACT_APP_PROXY_URL } = process.env;

module.exports = function () {
  if (MOCK === 'none') {
    createProxyMiddleware('/api', {
      target: REACT_APP_PROXY_URL,
      changeOrigin: true
    });
  }
};
