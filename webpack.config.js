const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
  // tools for development environment
  mode: 'development',
  devtool: 'inline-source-map',
  //
  entry: {
    app: path.resolve('src/index.js'),
    print: path.resolve('src/print.js')
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins:[
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      title: 'Output Management'
    })
  ]
}
