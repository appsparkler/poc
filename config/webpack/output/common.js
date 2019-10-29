module.exports = {
  path: require(`${process.env.INIT_CWD}/config/paths`).distDir,
  chunkFilename: '[name].bundle.js',
  filename: '[name].js'
}
