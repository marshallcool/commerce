'use strict';


const mongoose = require('../../modules/db').mongoose;

//Архив товаров и описаний
let Arch;

let archSchema = new mongoose.Schema({
    //Заголовок
    title_en:String,

    //Описание продукта
    dscr_en:String,

    //Ссылки внешние на продукты на сайтах производителя
    lnks:{},

    //Цена в заданной в настройках валюте
    price:Number,

    //Связанные с товаром данные
    attch:{}
});

Arch = mongoose.model('Arch', archSchema);
module.exports = Arch;