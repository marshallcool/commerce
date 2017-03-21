'use strict';
// in-memory store by default (use the right module instead)
const session = require('koa-generic-session');
const mongoose = require('../../../modules/db').mongoose;
const MongooseStore = require('koa-session-mongoose');
const config = require('../../../../config');

const store = {
  store: new MongooseStore({
    connection: mongoose.connection,
    collection: 'sessions',
    expires: config.session.cookie.maxAge / 1000 // sec
  })
};

Object.assign(config.session, store);

module.exports = session(config.session);