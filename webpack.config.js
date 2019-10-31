const { resolve } = require('path')

const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
  // setup for development environment
  mode: 'development',
  devtool: 'inline-src-map',
  devServer: {
    contentBase: resolve('dist'),
    open: true
  },
  entry: {
    app: resolve('src/index.js'),
    print: resolve('src/print.js')
  },
  output: {
    filename: '[name].bundle.js',
    path: resolve(__dirname, 'dist'),
  },
  plugins:[
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      title: 'Output Management'
    })
  ]
}
