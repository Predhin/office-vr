module.exports = require('./webpack.config-helper')({
  isProduction: false,
  //devtool: 'cheap-eval-source-map',
  devtool: 'inline-source-map',
  port: 8080
});