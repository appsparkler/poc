module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module'
  },
  env: {
    node: true,
    browser: true
  },
  extends: [
    "eslint:recommended"
  ],
  rules: {
    indent: ['error', 2]
  }
}
