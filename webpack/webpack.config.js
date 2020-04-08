const path = require ('path');
const Dotenv = require('dotenv-webpack');
const Promise = require('bluebird');

const loaders = require('./loaders.js');
const plugins = require('./plugins.js');

module.exports = () => {
  // configure Promise
  const devMode = process.env.NODE_ENV !== 'production';
  Promise.config({
    longStackTraces: devMode,
    warnings: devMode,
    cancellation: true
  });

  return {
    entry: './src/index.js',
    devtool: devMode ? 'inline-source-map' : '',
    devServer: {
      disableHostCheck: true,
      port: 8888,
      contentBase: './dist',
      publicPath: '/',
      historyApiFallback: true,
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    },
    module: {
      rules: [
        loaders.JSLoader,
        loaders.CSSLoader,
        loaders.HTMLLoader,
        loaders.FileLoader,
        loaders.FontLoader
      ]
    },
    plugins: [
      plugins.CleanWebpackPlugin,
      plugins.MiniCssExtractPlugin,
      plugins.HtmlWebPackPlugin,
      new Dotenv()
    ],
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    output: {
      publicPath: '/',
      path: path.resolve(__dirname, '../dist'),
      filename: 'js/[name].bundle.js'
    }
  }
};
