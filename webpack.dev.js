const path = require('path')

module.exports = {
  devServer: {
    contentBase: './dist',
    inline: true,
    port: 8001
  },
  devtool: 'inline-source-map',
  entry: './src/index.jsx',
  mode: 'development',
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.(eot|svg|ttf|woff|woff2)$/, use: ['file-loader'] }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist')
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  watch: true
}
