const merge = require('webpack-merge')
const HtmlWebpackReloadPlugin = require('html-webpack-reload-plugin')
const webpackBaseConfig = require('./webpack.common.config.js')

module.exports = merge(webpackBaseConfig, {
  plugins: [
    new HtmlWebpackReloadPlugin(),
  ]
})