const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'souce-map',
  devServer: {
    open: true,
    hot: true,
    historyApiFallback: true,
  },
  // devServer: {
  //   contentBase: path.join(__dirname, "dist"),
  //   compress: true,
  //   port: 9000,
  // },
});
