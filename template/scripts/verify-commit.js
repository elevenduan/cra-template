const fs = require('fs');
const chalk = require('chalk');
const msg = fs.readFileSync(process.argv[2], 'utf-8').trim();
const commitRE = /^(feat|fix|docs|ui|chore|locale)(\(.+\))?: .{1,50}/;
const errorMsg = `
  ${chalk.bgRed.white(' ERROR ') + chalk.red(' 提交日志不符合规范 ')}\n
  ${chalk.red('合法的提交日志格式如下(模块可选填): ')}\n
  ${chalk.green('feat(模块): 添加了个很棒的功能')}
  ${chalk.green('fix(模块): 修复了一些 bug')}
  ${chalk.green('docs(模块): 更新了一下文档')}
  ${chalk.green('ui(模块): 修改了一下样式')}
  ${chalk.green('chore(模块): 对脚手架做了些更改')}
  ${chalk.green('locale(模块): 为国际化做了微小的贡献')}
`;

if (!commitRE.test(msg)) {
  console.error(errorMsg);
  process.exit(1);
}
