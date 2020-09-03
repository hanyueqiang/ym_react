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
    filename: devMode ? '[name].js' : '[name].[chunkhash:7].js',
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
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        exclude: /[[\\/]node_modules[\\/]]/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[name]_[hash].[ext]',
              outputPath: 'assets/',
              limit: 20480, // 小于20kb，进行base64转码
            },
          },
        ],
      },
      {
        test: /\.(eot|woff2?|ttf)$/,
        exclude: /[[\\/]node_modules[\\/]]/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[name]-[hash:5].min.[ext]',
              limit: 5000,
              outputPath: 'fonts/',
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
      template: path.resolve(__dirname, '../src/index.html'), // 模板文件源
      filename: 'index.html', // 模板文件名
      minify: {
        collapseWhitespace: true, // 压缩空格
        minifyCSS: true, // 压缩css
        minifyJS: true, // 压缩js
        removeComments: true, // 移除注释
        caseSensitive: true, // 去除大小写
        removeScriptTypeAttributes: true, // 移除script的type属性
        removeStyleLinkTypeAttributes: true, // 移除link的type属性
      },
    }),
    // 自动查找标志符，当需要变量React时候，会自动去node_modules查找react模块
    new webpack.ProvidePlugin({
      React: 'react',
      ReduxConnect: ['react-redux', 'connect'],
      Axios: 'axios',
    }),
    new MiniCssExtractPlugin({
      filename: devMode ? '[name].css' : '[name].[contenthash].css',
      chunkFilename: devMode ? '[id].css' : '[id].[contenthash].css',
    }),
  ],
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      maxInitialRequests: 6,
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
