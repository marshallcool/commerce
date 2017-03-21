'use strict';
const mongoose   = require('mongoose');
const config     = require('../../../config');
mongoose.Promise = global.Promise;

if (process.env.MONGOOSE_DEBUG) mongoose.set('debug', true);

mongoose.connect(`${config.mongoose.url}/${config.mongoose.dbName}`,
  config.mongoose.options);

module.exports = {
    mongoose: mongoose,
    init: () => {}
};
