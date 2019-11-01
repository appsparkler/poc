module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  env: {
    node: true,
    browser: true
  },
  extends: [
    "eslint:recommended",
    "react-app"
  ],
  rules: {
    indent: ['error', 2],
    semi: [2, "never"]
  }
}
