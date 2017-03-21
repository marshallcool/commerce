'use strict';
const isProd = process.env.NODE_ENV === 'production';
const log    = require('modules/logger').log;

const defaultLevel     = 'info';
const requestTimeLevel = 150;

let logger;

function getMsg(method, url, status, time) {
  return '[RES] ' + method + ' ' + url + ` (${status})` + ' in ' + time + ' ms';
}

function* middleware(next) {
  const startTime = new Date().getTime();

  log[defaultLevel](`[REQ] ${this.method} ${this.url}`);

  const done = () => {
    const requestTime = new Date().getTime() - startTime;
    let localLevel    = defaultLevel;

    if (requestTimeLevel && requestTime > requestTimeLevel) {
      localLevel = 'warn';
    }
    log[localLevel](getMsg(
      this.method, this.originalUrl, this.status, requestTime
    ));
  };

  this.res.once('finish', done);
  this.res.once('close', done);

  yield* next;
}

if (!isProd) {
  logger = require('koa-logger')();
} else {
  logger = middleware;
}

module.exports = logger;