const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  module: {
      rules: [
        { test: /\.js$/, use: 'babel-loader' }
      ]
  },
  devServer: {
    port: 3000,
    publicPath: '/dist/',
    contentBase: path.resolve(__dirname, './'),
    watchContentBase: true,
    compress: true,
    hot: true
  }
};