'use strict';


const mongoose = require('../../modules/db').mongoose;

//Ваучеры/Сертификаты на скидку/получение товара
let Vouchers;

let vouchersSchema = new mongoose.Schema({
    //Код с ваучера
    voucher:String,

    //Диаппазон дат действия
    dt:{},

    //Цена, которую скидывает ваучер 0-100% в выбранной валюте магазина
    price:Number,

    //Ид привязанных продуктов или категорий
    idattch:{}
});

Vouchers = mongoose.model('Vouchers', vouchersSchema);
module.exports = Vouchers;