const lessLoaderPath = require.resolve('less-loader');

function addLess(config) {
  const rules = config.module.rules[1].oneOf;
  // lessRule
  const lessRule = Object.assign({}, rules.slice(-3, -2)[0]);
  lessRule.test = /\.less$/;
  lessRule.exclude = /\.module\.less$/;
  lessRule.use[lessRule.use.length - 1].loader = lessLoaderPath;
  // lessModuleRule
  const lessModuleRule = Object.assign({}, rules.slice(-2, -1)[0]);
  lessModuleRule.test = /\.module\.less$/;
  lessModuleRule.use[lessModuleRule.use.length - 1].loader = lessLoaderPath;
  // insert
  rules.splice(-1, 0, lessRule, lessModuleRule);
}

module.exports = addLess;
