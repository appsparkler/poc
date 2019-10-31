const path = require('path')

module.exports = {
  entry: {
    app: path.resolve('src/index.js'),
    print: path.resolve('src/print.js')
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  }
}
