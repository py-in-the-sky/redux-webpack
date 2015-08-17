var path = require('path');


module.exports = {
  devtool: 'source-map',  // normal source mapping

  context: path.join(__dirname, 'app'),

  entry: {
    javascript: './app.js',
    html:       './index.html'
  },

  output: {
    filename: 'app.js',
    path:     path.join(__dirname, 'dist'),
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel'],
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        loader: 'file?name=[name].[ext]',
      },
      // TODO:
      // {
      //   test: /\.css$/,
      //   loader: 'style!css'
      // }
    ],
  }
};
