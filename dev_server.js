var webpack          = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config           = require('./webpack.config');


new WebpackDevServer(webpack(config), {
  hot: true,
  noInfo: true,
  historyApiFallback: true,  // useful for html5 popstate paths
  publicPath: config.output.publicPath,

  stats: {
    colors: true
  },

  watchOptions: {
    aggregateTimeout: 100,
    // poll: 1000
  },

  proxy: {
    '/blah*': 'http://localhost:8008/'
  }

}).listen(8080, 'localhost', function (err) {
  var listening = 'Listening at http://localhost:8080 and http://localhost:8080/webpack-dev-server/';
  console.log( err || listening );
});
