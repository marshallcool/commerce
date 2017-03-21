'use strict';


const Delvr  =require('../../db-modules/delvr');
module.exports =
{
    //Получение методов доставки
    getAll: function*(next)
    {
        let delivery=yield Delvr.find();
        this.body=delivery;
        //this.body="ok"
    }
};
