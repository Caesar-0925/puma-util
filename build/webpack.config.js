const path = require('path')

const resolve = (str) => path.join(__dirname, '../', str)

module.exports = {
  mode: 'production',
  context: path.resolve(__dirname, '../'),
  entry: resolve('src/index.js'),
  output: {
    filename: 'index.js',
    path: resolve('dist'),
    library: 'puma-util',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: [resolve('src')],
        use: {
          loader: 'babel-loader?cacheDirectory=true'
        }
      }
    ]
  },
  optimization: {
    minimize: true,
    sideEffects: true
  }
}
