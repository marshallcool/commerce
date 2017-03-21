'use strict';

const Router    = require('koa-router');
let ctrl = require('./controller');
let router = new Router();

//Получение контактов
router.get('/getall', ctrl.getAll);
module.exports = router.routes();