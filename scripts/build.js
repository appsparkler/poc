module.exports = function() {
  const webpack = require('webpack')
  const webpackConfig = require(`../config/webpack/common`)
  const compiler = webpack(webpackConfig)
  compiler.run(compilerCB)
}

function compilerCB() {
  console.log('Compiled...') // eslint-disable-line
}
