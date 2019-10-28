const { resolve } = require('path')
console.log('resolve() : ',resolve())
module.exports = {
  baseDir: resolve(),
  srcDir: resolve('src'),
  distDir: resolve('dist'),
  publicDir: resolve('public'),
  //
  indexJS: resolve('src/index.js'),
  indexHTML: resolve('public/index.html')
}
