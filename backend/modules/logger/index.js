'use strict';

const bunyan = require('bunyan');
const log = bunyan.createLogger({name: 'shop'});

exports.log = log;
exports.init = () => {};