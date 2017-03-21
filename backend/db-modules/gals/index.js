'use strict';


const mongoose = require('../../modules/db').mongoose;

//Галлереи фото/видео
let Gals;

let galsSchema = new mongoose.Schema({
    //Ид слайда
    id:Number,

    //Ид галлереи
    idgal:Number,

    //Тип слайда фото/видео/аудио/файла
    typ:Number,

    //Заголовок слайда
    title:String,

    //Описание слайда
    dscr:String,

    //Размер локального файла в байтах
    sz:Number,

    //Путь до локального файла
    pth:String,

    //Внутренняя ссылка на продукт (id продукта)
    prodId:Number
});

Gals = mongoose.model('Gals', galsSchema);
module.exports = Gals;