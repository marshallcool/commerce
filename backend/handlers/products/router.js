'use strict';

const Router    = require('koa-router');
let ctrl = require('./controller');
let router = new Router();
router
    .param('id', ctrl.params.productById)
    .post('/', ctrl.getProducts)
    .get('/', ctrl.getProducts)
    .get('/:id', ctrl.getOneProduct)
    .post('/:id', ctrl.getOneProduct);
module.exports = router.routes();
