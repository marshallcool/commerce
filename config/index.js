'use strict';
const path = require('path');
const ROOT = `${__dirname}/..`;
const isProd = process.env.NODE_ENV === 'production';
const isTest = process.env.NODE_ENV === 'testing';

module.exports = {
  server: {
    port: process.env.NODE_PORT || 3000,
    host: process.env.NODE_HOST || isProd ? '0.0.0.0' : '127.0.0.1',
    root: path.normalize(ROOT),
    public: path.normalize(`${ROOT}/public`),
    fixtures: path.normalize(`${ROOT}/fixtures`)
  },

  client: {
    root: path.normalize(`${ROOT}/src`),
    assets: path.normalize(`${ROOT}/public/assets`)
  },

  mongoose: {
    url: process.env.NODE_MONGO_URL || 'mongodb://localhost',
    dbName: process.env.NODE_MONGO_DB_NAME || isTest ? 'test' : 'shop',
    options: {
      server: {
        socketOptions: {
          keepAlive: 1
        },
        poolSize: 5
      }
    }
  },

  session: {
    key: 'sid',
    prefix: 'sess:',
    rolling: true,
    cookie: {
      httpOnly: true,
      path: '/',
      overwrite: true,
      maxAge: 3600 * 5 * 1000 // ms
    }
  },

  secret: process.env.NODE_SECRET || 'secretword',

  crypto: {
    hash: {
      length: 128,
      iterations: isProd ? 12000 : 1
    }
  },

  modules: [
    'db',
    'logger'
  ],

  handlers: [
    'core',
    'auth',
    'users',
    'accounts',
    'categories',
    'transactions',
    'stats',
    'langs'
  ]

};
