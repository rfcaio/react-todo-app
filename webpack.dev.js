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
  parts.loadJS()
])

const developmentConfig = merge([
  parts.devServer(),
  parts.generateSourceMaps(),
  parts.loadCSS()
])

const productionConfig = merge([
  {
    optimization: {
      splitChunks: {
        cacheGroups: {
          commons: {
            chunks: 'initial',
            name: 'vendor',
            test: /[\\/]node_modules[\\/]/
          }
        }
      }
    }
  },
  parts.clean(),
  parts.extractCSS(),
  parts.generateSourceMaps('source-map'),
  parts.minifyCSS({
    discardComments: {
      removeAll: true
    },
    safe: true
  }),
  parts.minifyJS()
])

module.exports = mode => merge(
  commonConfig,
  mode === 'development' ? developmentConfig : productionConfig,
  { mode }
)
