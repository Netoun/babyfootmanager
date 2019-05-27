const merge = require('webpack-merge')
const webpack = require('webpack')
const TerserPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const webpackBaseConfig = require('./webpack.common.config.js')

require('dotenv').config()

console.log(process.env.NODE_ENV)
console.log(process.env.SOCKET_HOST)

module.exports = merge(webpackBaseConfig, {
  optimization: {
    minimizer: [
      new TerserPlugin(),
      new OptimizeCSSAssetsPlugin(),
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(process.env.NODE_ENV),
          SOCKET_HOST: JSON.stringify(process.env.SOCKET_HOST),
          SOCKET_PORT: JSON.stringify(process.env.SOCKET_PORT),
        },
      })
    ]
  }
})