const { resolve } = require('path')

const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  // setup for development environment
  mode: 'development',
  devtool: 'inline-sorce-map',
  devServer: {
    contentBase: resolve('dist'),
    open: true,
    writeToDisk:true
  },
  entry: {
    app: resolve('src/index.js')
  },
  output: {
    filename: '[name].bundle.js',
    path: resolve(__dirname, 'dist'),
    chunkFilename: '[name].bundle.js'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      title: 'Output Management'
    })
  ]
}
