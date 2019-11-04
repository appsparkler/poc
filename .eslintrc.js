module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2020
  },
  env: {
    node: true,
    "jest/globals": true
  },
  extends: [
    'google'
  ],
  plugins: [
    "jest"
  ],
  rules: {
    semi: [2, 'never']
  }
}
