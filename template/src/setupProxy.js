const { createProxyMiddleware } = require('http-proxy-middleware');
const mockerApi = require('mocker-api');
const path = require('path');
const { MOCK, REACT_APP_API_URL } = process.env;

module.exports = function (app) {
  if (MOCK === 'none') {
    app.use(
      '/api',
      createProxyMiddleware({
        target: REACT_APP_API_URL,
        changeOrigin: true
      })
    );
  } else {
    mockerApi(app, path.resolve('./mock'));
  }
};
