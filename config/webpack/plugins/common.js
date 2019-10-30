const HTMLPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = [
  new CleanWebpackPlugin(),
  new HTMLPlugin({
    template: require(`${process.env.INIT_CWD}/config/paths`).indexHTML
  }),
]
