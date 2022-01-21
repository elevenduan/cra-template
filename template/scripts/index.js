/*
 * 如需自定义webpack配置，请在 package.json > scripts 添加此脚本
 * 如："start": "node ./scripts start"
 */

const configPath = require.resolve('react-scripts/config/webpack.config.js');
const addLess = require('./add-less');

require.cache[configPath] = {
  exports: function (webpackEnv) {
    delete require.cache[configPath];
    const config = require(configPath)(webpackEnv);
    // 支持less
    addLess(config);
    return config;
  }
};

require(`react-scripts/scripts/${process.argv[2]}.js`);
