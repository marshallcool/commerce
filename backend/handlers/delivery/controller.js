'use strict';


const Delvr  =require('../../db-modules/delvr');
module.exports =
{
    //Получение методов доставки
    getAll: function*(next)
    {
        let delivery=yield Delvr.find().sort({num:1});
        this.body=delivery;
    }
};
