const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: {
    app: path.resolve(__dirname, '../src/index.tsx'),
  },
  output: {
    filename: devMode ? '[name].js' : '[name].[hash].js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '@': path.resolve(__dirname, '../src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        exclude: /[[\\/]node_modules[\\/]]/,
        loader: 'html-loader',
        options: {
          minimize: !devMode,
        },
      },
      {
        test: /\.js(x?)|(\.ts(x?))$/,
        exclude: /[[\\/]node_modules[\\/]]/,
        loader: 'babel-loader?cacheDirectory=true',
      },
      {
        test: /\.(less|css)$/,
        exclude: /[[\\/]node_modules[\\/]]/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: true,
              hmr: devMode,
            },
          },
          'css-loader',
          'postcss-loader',
          'less-loader',
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'hello',
      template: path.resolve(__dirname, '../src/index.html'),
      filename: 'index.html',
    }),
    // 自动查找标志符，当需要变量React时候，会自动去node_modules查找react模块
    new webpack.ProvidePlugin({
      React: 'react',
      ReduxConnect: ['react-redux', 'connect'],
      Axios: 'axios',
    }),
    new MiniCssExtractPlugin({
      filename: devMode ? '[name].css' : '[name].[hash].css',
    }),
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[[\\/]node_modules[\\/]]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
};
