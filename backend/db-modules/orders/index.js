'use strict';


const mongoose = require('../../modules/db').mongoose;

//Заказы
let Orders;

let ordersSchema = new mongoose.Schema({

    //Ид заказа
    id:Number,

    //Ид продукта
    prodId:Number,

    //Тип заказ/предзаказ
    typ:Number,

    //Способ доставки
    dlvr:Number,

    //Адрес доставки
    addr:{},

    //Контакты заказчика
    cntct:{},

    //Комментарии к заказу
    cmnts:String,

    //Состояние заказа
    stat:Number,

    //Оплаченная сумма
    price:Number,

    //Способ оплаты
    priceTyp:Number,

    //Ид пользователя если зареган
    usr_id:Number,

    //Дата создания заказа
    dt:
    {
        type     : Date,
        default: Date.now
    },

    //Количество
    cnt:Number
});

Orders = mongoose.model('Orders', ordersSchema);
module.exports = Orders;
