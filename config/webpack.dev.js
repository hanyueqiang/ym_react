const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    open: true,
    hot: true, // 支持热更新
    historyApiFallback: true,
    port: 8088,
    proxy: {
      '/api': 'http://localhost:3000',
    },
  },
  // devServer: {
  //   contentBase: path.join(__dirname, "dist"),
  //   compress: true,
  //   port: 9000,
  // },
});
