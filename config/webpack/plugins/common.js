const HTMLPlugin = require('html-webpack-plugin')

module.exports = [
    new HTMLPlugin({
      template: require(`../../../config/paths`).indexHTML
    })
]
