'use strict';

const Router    = require('koa-router');
let ctrl = require('./controller');
let router = new Router();
router
    .param('id', ctrl.params.userById)

    //Получение пользователя по email & pass
    .get('/', ctrl.getUsersByGET)

    //Регистарция пользователя и отпрака email
    .post('/signup', ctrl.signup)

    //Авторизация пользователя
    .post('/signin', ctrl.signin)

    //.post('/', ctrl.getUsersByPOST)//Получение пользователя по email & pass

module.exports = router.routes();
