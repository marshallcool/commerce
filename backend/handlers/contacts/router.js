'use strict';

const Router    = require('koa-router');
let ctrl = require('./controller');
let router = new Router();

//Получение контактов
router.get('/', ctrl.getContacts);
module.exports = router.routes();