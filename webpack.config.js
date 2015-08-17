var path       = require('path');
var webpack    = require('webpack');
var publicPath = 'http://localhost:8080/';
// trailing slash is critical
// the JS, CSS, etc. serverd by the webpack dev server will
// be available at publicPath
// conceptually, publicPath will be your local dev CDN for
// your own JS, CSS, etc. bundles


module.exports = {
  devtool: 'eval',
  // makes sure errors in console map to the correct file and line number

  context: path.join(__dirname, 'app'),

  entry: {
    javascript: [
      'webpack-dev-server/client?' + publicPath,  // for non-hot updates
      'webpack/hot/only-dev-server',  // for hot updates
      './app.js',
    ],
    html: './index.html',
  },

  output: {
    filename:   'app.js',
    path:       path.join(__dirname, 'dist'),
    publicPath: publicPath,
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // We have to manually add the Hot Replacement plugin when running from Node
    new webpack.NoErrorsPlugin(),
  ],

  module: {
    loaders: [
      {
        test:    /\.js$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel'],
        // I highly recommend using the babel-loader as it gives you
        // ES6/7 syntax and JSX transpiling out of the box
      },
      {
        test:    /\.html$/,
        exclude: /node_modules/,
        loader:  'file?name=[name].[ext]',
      },
      // TODO:
      // Let us also add the style-loader and css-loader, which you can
      // expand with less-loader etc.
      // {
      //   test: /\.css$/,
      //   loader: 'style!css'
      // }
    ],
  },
}
