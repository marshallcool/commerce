'use strict';

const Router    = require('koa-router');
let ctrl = require('./controller');
let router = new Router();

router
    .param('id', ctrl.params.categById)

    //Получение всех категорий
    .get('/all', ctrl.getCategs)

    //Получение одной категории
    .get('/one/:id', ctrl.getCategById)

    //Получение дочешних категорий одного уровня
    .get('/children/:id', ctrl.getCategChildren)

    //Получение продуктов выбранной категории
    .get('/products-of-cat/:id', ctrl.getProductsOfCateg);
module.exports = router.routes();
