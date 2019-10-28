const webpack = require('webpack')
const webpackConfig = require(`${process.env.INIT_CWD}/config/webpack/common`)
const compiler = webpack(webpackConfig)
compiler.run(compilerCB)

function compilerCB() {
  console.log(arguments) // eslint-disable-line
}

console.log(webpackConfig) // eslint-disable-line
