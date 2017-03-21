'use strict';

const compose = require('koa-compose');
const isDev = process.env.NODE_ENV === 'development';
const isTest = process.env.NODE_ENV === 'testing';

let middleware = [
    require('./middleware/04-errors'),
    require('./middleware/05-session'),
    require('./middleware/06-bodyParser')
//  require('./middleware/07-multipartParser'),

//    require('./middleware/08-cleanPassportWrapper'),
//    require('./middleware/09-passport')
/*

  require('./middleware/10-passportSession'),
  require('./middleware/11-qsParser')
*/
];
/*
if (!isTest) {
  middleware.unshift(require('./middleware/03-logger'));
}

if (isDev) {
  middleware.unshift(
    require('./middleware/01-favicon'),
    require('./middleware/02-static')
  );
}
*/
module.exports = compose(middleware);