module.exports = {
  path: require(`${process.env.INIT_CWD}/config/paths`).distDir,
  chunkFilename: '[name].[contenthash].bundle.js',
  filename: '[name].[contenthash].js'
}
