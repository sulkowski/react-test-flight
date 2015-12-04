var webpack = require('webpack');
var _ = require('lodash');

var config = module.exports = require('./common.js');

_.merge(config, {
  debug: true,
  displayErrorDetails: true,
  outputPathinfo: true,
  devtool: 'sourcemap'
});

config.plugins.push(new webpack.DefinePlugin({__DEVELOPMENT__: true}));
