module.exports = {
  runtimeChunk: 'single',
  moduleIds: 'hashed',
  splitChunks: {
    cacheGroups: {
      vendor: {
        name: 'vendors',
        test: /[\\/]node_modules[\\/]/,
        chunks: 'all'
      }
    }
  }
}
