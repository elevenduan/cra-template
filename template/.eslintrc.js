module.exports = {
  extends: ['react-app', 'react-app/jest', 'prettier'],
  rules: {
    'import/no-anonymous-default-export': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'jsx-a11y/anchor-is-valid': 'off'
  }
};
