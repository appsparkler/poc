module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module',
    allowImportExportEverywhere: true
  },
  env: {
    browser: true
  },
  extends: [
    'eslint:recommended'
  ],
  rules: {
    semi: [2, 'never'],
    indent: ["error", 2]
  }
};
