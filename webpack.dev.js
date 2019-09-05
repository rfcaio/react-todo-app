const HtmlWebpackPlugin = require('html-webpack-plugin')
const merge = require('webpack-merge')
const path = require('path')

const parts = require('./webpack.parts')

const commonConfig = merge([
  {
    entry: './src/index.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, './dist')
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'src/index.html'
      })
    ]
  },
  parts.devServer(),
  parts.loadJS()
])

const developmentConfig = merge([
  parts.generateSourceMaps(),
  parts.loadCSS()
])

const productionConfig = merge([
  parts.generateSourceMaps('source-map')
])

module.exports = mode => merge(
  commonConfig,
  mode === 'development' ? developmentConfig : productionConfig,
  { mode }
)
