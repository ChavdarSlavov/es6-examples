const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const PATHS = {
  src: path.join(__dirname, 'src/index.js'),
  dist: path.join(__dirname, 'dist')
};

module.exports = {
  devServer: {
    noInfo: true,
    colors: true,
    contentBase: PATHS.dist,
    port: 3000,
    historyApiFallback: true,
    aggregateTimeout: 300,
    poll: 1000
  },
  devtool: 'source-map',
  entry: [
    'webpack-dev-server/client?http://127.0.0.1:3000/',
    PATHS.src
  ],
  output: {
    path: PATHS.dist,
    filename: 'bundle.js'
  },
  resolve: {
    moduleDirectories: ['node_modules', 'src'],
    extensions: ['', '.js']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel?presets[]=es2015,presets[]=stage-0']
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin([PATHS.dist], {
      root: process.cwd()
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inect: true
    })
  ]
};