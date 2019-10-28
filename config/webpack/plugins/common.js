const HTMLPlugin = require('html-webpack-plugin')

module.exports = [
    new HTMLPlugin({
      template: require(`${process.env.INIT_CWD}/config/paths`).indexHTML
    })
]
