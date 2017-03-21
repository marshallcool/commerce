'use strict';


const mongoose = require('../../modules/db').mongoose;

//Рекламмодатели
let UsrAd;

let usrAdSchema = new mongoose.Schema({
    //Ид пользователя
    id:Number,

    //Имя
    fnam:String,

    //Отчество
    snam:String,

    //Фамилия
    lnam:String,

    //Телефон
    phones:{},

    //Почта
    email:String,

    //Пароль
    pass:String,

    //Псевдоним
    nick:String,

    //Заблокирован
    blkd:Number,

    //Причина блокировки
    blkmsg:String,

    //Дата/Время последней попытки входа
    authlst:{
        type:Date,
        default: Date.now
    },

    //Количество попыток входа до блокировки
    authcntblk:Number
});

UsrAd = mongoose.model('UsrAd', usrAdSchema);
module.exports = UsrAd;