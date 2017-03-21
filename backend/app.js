'use strict';

const app = require('koa')();
const config = require('../config');
const validate = require('koa-validation');
app.keys = [config.secret];
app.use(validate());

require('./modules/db').init(app);
require('./modules/logger').init(app);
require('./handlers/core').init(app);
require('./handlers/users').init(app);
require('./handlers/filldemo').init(app);
require('./handlers/products').init(app);
require('./handlers/categ').init(app);
require('./handlers/contacts').init(app);
require('./handlers/delivery').init(app);


/*
config.modules.forEach(module => {
  require(`./modules/${module}`).init(app);
});

config.handlers.forEach(handler => {
  require(handler).init(app);
});
*/
module.exports = app;


