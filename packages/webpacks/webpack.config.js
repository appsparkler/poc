
const DashboardPlugin = require('webpack-dashboard/plugin');
module.exports = {
  entry: './src/index.js',
  plugins: [new DashboardPlugin({port: 3001})],
};
