'use strict';


const mongoose = require('../../modules/db').mongoose;

//Категории
let Categ;

let categSchema = new mongoose.Schema({

    //Левый ключ
    lk:
    {
        type:Number,
        default:1
    },

    //Правый ключ
    rk:
    {
        type:Number,
        default:1
    },

    //Уровень в дереве
    lev:
    {
        type:Number,
        default:1
    },

    //Имя категории
    nam_en:String,

    //Номер категории в списке
    num:
    {
        type:Number,
        default:1
    },

    //Ид родительской категории
    parid:mongoose.Schema.Types.ObjectId,

    //Настройки вывода категории
    stngs:{},

    //Дата/Время добавления
    dt:
    {
        type     : Date,
        default: Date.now
    },

    //Иконки категории
    icn:{
        sml:'',
        big:''
    },

    //Количество продуктов в категории
    prodCnt:
    {
        type:Number,
        default:0
    },




    //временно для демо
    //Ид категории
    idn:
    {
        type:Number,
        default:1
    },
    //Ид родительской категории
    parid_:
    {
        type:Number,
        default:1
    },
});

//Создание индекса
// productSchema.index({title_en: 1}, {unique: true});
// productSchema.plugin(uniqueValidator, {
//     message: 'The title exists'
// });

Categ = mongoose.model('Categ', categSchema);
module.exports = Categ;

