'use strict';

const Router    = require('koa-router');
let ctrl = require('./controller');
let router = new Router();
router.get('/', ctrl.fillDemo);
module.exports = router.routes();
