module.exports = {
  runtimeChunk: 'single',
  splitChunks: {
    cacheGroups: {
      vendor: {
        name: 'vendors',
        test: /\/node_modules\//,
        chunks: 'all'
      }
    }
  }
}
