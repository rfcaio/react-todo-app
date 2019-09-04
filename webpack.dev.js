const HtmlWebpackPlugin = require('html-webpack-plugin')
const merge = require('webpack-merge')
const path = require('path')

const commonConfig = merge([
  {
    devServer: {
      contentBase: './dist',
      inline: true,
      overlay: true,
      port: 8001
    },
    devtool: 'inline-source-map',
    entry: './src/index.js',
    module: {
      rules: [
        { test: /\.css$/, use: ['style-loader', 'css-loader'] },
        { exclude: /node_modules/, test: /\.js$/, use: ['babel-loader'] }
      ]
    },
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, './dist')
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'src/index.html'
      })
    ],
    watch: true
  }
])

const developmentConfig = merge([])

module.exports = mode => merge(commonConfig, developmentConfig, { mode })
