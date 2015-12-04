var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var railsRoot = path.join(__dirname, '../', '../');

var styleLoaders = [
  "css-loader",
  'autoprefixer-loader?{browsers:["last 2 version", "IE 9"]}',
  "sass-loader"
];

var config = module.exports = {
  context: railsRoot,

  entry: {
    base: path.join(railsRoot, 'app', 'assets', 'react', 'base.jsx')
  },

  output: {
    path: path.join(railsRoot, 'app', 'assets'),
    filename: path.join('javascripts', 'apps', '[name].js'),
    publicPath: '/assets'
  },

  resolve: {
    extensions: ['', '.js', '.jsx', '.scss'],
    modulesDirectories: ['node_modules', path.join(railsRoot, 'app', 'react')]
  },

  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.scss$/, loader: ExtractTextPlugin.extract('style-loader', styleLoaders.join('!')) },
    ]
  },

  plugins: [
    new ExtractTextPlugin(path.join('stylesheets', '[name].css'))
  ]
};
