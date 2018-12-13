module.exports = {
  entry: 'server/app.js',
  mode: 'development',
  output: {
    path: __dirname,
    filename: 'client/bundle.js'
  },
  devtool: 'source-maps',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
}
