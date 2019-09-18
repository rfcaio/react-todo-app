const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const cssnano = require('cssnano')
const ErrorOverlayWebpackPlugin = require('error-overlay-webpack-plugin')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')

require('dotenv/config')

exports.clean = () => {
  return {
    plugins: [
      new CleanWebpackPlugin()
    ]
  }
}

exports.devServer = (options = {}) => {
  return {
    devServer: Object.assign({
      contentBase: './dist',
      inline: true,
      overlay: false,
      port: process.env.PORT || 8001,
      stats: 'errors-only'
    }, options)
  }
}

exports.extractCSS = () => {
  return {
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            MiniCSSExtractPlugin.loader,
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                plugins: () => [require('autoprefixer')()]
              }
            }
          ]
        }
      ]
    },
    plugins: [
      new MiniCSSExtractPlugin({
        filename: '[name].[contenthash].css'
      })
    ]
  }
}

exports.generateSourceMaps = (devtool = 'inline-source-map') => ({ devtool })

exports.loadCSS = () => {
  return {
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        }
      ]
    }
  }
}

exports.loadJS = () => {
  return {
    module: {
      rules: [
        {
          exclude: /node_modules/,
          test: /\.js$/,
          use: ['babel-loader']
        }
      ]
    }
  }
}

exports.minifyCSS = (options = {}) => {
  return {
    plugins: [
      new OptimizeCSSAssetsWebpackPlugin({
        cssProcessor: cssnano,
        cssProcessorOptions: options,
        canPrint: false
      })
    ]
  }
}

exports.minifyJS = () => {
  return {
    optimization: {
      minimizer: [new TerserWebpackPlugin({ sourceMap: true })]
    }
  }
}

exports.useErrorOverlay = () => {
  return {
    plugins: [new ErrorOverlayWebpackPlugin()]
  }
}
