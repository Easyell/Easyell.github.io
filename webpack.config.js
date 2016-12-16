var webpack = require('webpack')
var path = require('path')
var fs = require('fs')
var entry = {}
var appDir = path.resolve(__dirname, './src/apps')
fs.readdirSync(appDir).filter(function(child) {
  return fs.lstatSync(appDir + '/' + child).isDirectory()
}).forEach(function(child) {
  entry[child] = [
    './src/apps/' + child + '/index.jsx'
  ]
})

module.exports = {
  entry: entry,
  output: {
      path: __dirname + "/js/dist/",
      filename: "[name].js",
      publicPath: "/js/dist/"
  },
  externals:{
    react:'React',
    'react-dom':'ReactDOM',
  },
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css$/,
        loaders: ["style-loader", "css-loader"]
      },
      {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.md$/,
        loaders: ['raw-loader']
      }
    ]
  },
}
