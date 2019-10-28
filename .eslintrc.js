module.exports = {
  parserOptions: {
    "ecmaVersion": 6,
    sourceType: 'module'
  },
  parser: 'babel-eslint',
  env:{
      node:true,
      browser: true
  },
  extends: [
    "eslint:recommended"
  ],
  rules: {
     "for-direction": 0
   }
};
