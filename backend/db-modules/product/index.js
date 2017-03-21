'use strict';


const mongoose = require('../../modules/db').mongoose;

//Продукт
let Product;

let productSchema = new mongoose.Schema({
    //Ид продукта
    id:Number,

    //Заголовок продукта
    title_en:
    {
        type     : String,
        required : true,
        trim     : true
    },

    //Описание продукта
    dscr_en:String,

    //Ссылки внешние на продукт на сайт производителя
    lnks:[],

    //Цена в заданной в настройках валюте
    price:
    {
        type     : Number,
        default: 0
    },

    //Скидки, цены и диапазоны дат действия
    offrs:[],

    //Количество товара при заказе которого дается 1 бесплатный товар
    freepolicy:{},

    //Ид категории если 1 товар входит в 1 категорию
    categId:Number,

    //Галлерея продукта
    gallery:{}
});

//Создание индекса
// productSchema.index({title_en: 1}, {unique: true});
// productSchema.plugin(uniqueValidator, {
//     message: 'The title exists'
// });

Product = mongoose.model('Product', productSchema);
module.exports = Product;

