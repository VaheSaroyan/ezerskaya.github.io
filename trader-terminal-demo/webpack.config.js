const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const outputDirectory = 'docs'

module.exports = {
  entry: './index.js',
  output: {
    path: path.join(__dirname, outputDirectory),
    filename: 'bundle.[hash].js'
  },
  devServer: {
    port: 3000,
    open: true,
    contentBase: 'index.html',
    watchContentBase: true,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ]
}