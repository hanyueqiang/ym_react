const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: {
    app: path.resolve(__dirname, '../src/main.tsx'),
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
        use: [
          // 'thread-loader',
          'babel-loader?cacheDirectory=true',
        ],
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
      {
        test: /\.(png|jpe?g|gif)$/,
        exclude: /[[\\/]node_modules[\\/]]/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/[name].[sha512:hash:base64:7].[ext]',
            },
          },
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
      chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
    }),
  ],
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      maxInitialRequests: 6,
      cacheGroups: {
        commons: {
          test: /[[\\/]node_modules[\\/]]/,
          name(module) {
            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
            return `npm.${packageName.replace('@', '')}`;
          },
          chunks: 'all',
        },
      },
    },
  },
};
