const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: "development",
  entry: './js/dynamic_nested.js',
  output: {
    filename: 'dynamic_nested.js',
    path: path.resolve(__dirname, './static'),
    library: 'dynamic_nested',
    libraryTarget: 'umd'
  },
  devtool: 'inline-cheap-source-map',
  module: {
    rules: [
      {
        test: path.resolve(__dirname, './js/dynamic_nested.js'),
        use: [{
          loader: 'expose-loader',
          options: 'Phoenix.LiveView'
        }]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Development',
    }),
  ]
}
