'use strict';

const mountHandlerMiddleware = require('../../lib/mountHandlerMiddleware');
exports.init = function(app) {
  app.use(mountHandlerMiddleware('/users', __dirname));
};