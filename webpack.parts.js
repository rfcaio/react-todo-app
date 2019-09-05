
exports.devServer = (options = {}) => {
  return {
    devServer: Object.assign({
      contentBase: './dist',
      inline: true,
      overlay: true,
      port: 8001,
      stats: 'errors-only'
    }, options)
  }
}

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
