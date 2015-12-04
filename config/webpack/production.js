var webpack = require('webpack');
var _ = require('lodash');
var path = require('path');
var ChunkManifestPlugin = require('chunk-manifest-webpack-plugin');
var config = module.exports = require('./common.js');

_.merge(config, {
  bail: true,

  output: {
    path: path.join(config.context, 'public', 'assets'),
    filename: '[name]-[chunkhash].js',
    chunkFilename: '[id]-[chunkhash].js',
  }
});

config.plugins.push(
  new ChunkManifestPlugin({
    filename: 'webpack-common-manifest.json',
    manifestVariables: 'webpackBundleManifest'
  }),
  new webpack.optimize.UglifyJsPlugin(),
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.DefinePlugin({__DEVELOPMENT__: false})
);
