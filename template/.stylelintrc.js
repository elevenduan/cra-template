module.exports = {
  customSyntax: 'postcss-syntax',
  extends: ['stylelint-config-standard-scss', 'stylelint-config-prettier'],
  rules: {
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global']
      }
    ],
    'selector-class-pattern': null
  }
};
