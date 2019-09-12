const HtmlWebpackPlugin = require('html-webpack-plugin')
const merge = require('webpack-merge')

const parts = require('./webpack.parts')

const commonConfig = merge([
  {
    output: {
      publicPath: '/'
    }
  },
  {
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
    output: {
      chunkFilename: '[name].[chunkhash].js',
      filename: '[name].[chunkhash].js'
    }
  },
  {
    optimization: {
      runtimeChunk: {
        name: 'manifest'
      },
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
