/* eslint-disable global-require */

/**
 * Front-end middleware
 */
module.exports = (app, options) => {
  const webpackConfig = require('../../internals/webpack/webpack.dev.babel');
  const addDevMiddlewares = require('./addDevMiddlewares');
  addDevMiddlewares(app, webpackConfig);

  return app;
};
