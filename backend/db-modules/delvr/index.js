'use strict';


const mongoose = require('../../modules/db').mongoose;

//Доставка
let Delvr;

let delvrSchema = new mongoose.Schema({
    //Заголовок доставки
    title:String,

    //Описание способа доставки
    txt:String,

    //Полная статья описания метода доставки
    fulltxt:String,

    //Статья-описание вкл-1
    fulltxton:Number,    

    //Массив прикрепленных в статью метатегов изображений при удалени сервиса доставки удалятся также картинки из массива
    imgs:[],

    //Веб сайт поставщика услуг
    site:String,

    //Возможность отслеживать послылку
    wtch:Number,

    //Логотип компании
    logo:String,

    //Детальный калькулятор
    detls:{},

    //Номер вывода в списке
    num:Number
});

Delvr = mongoose.model('Delvr', delvrSchema);
module.exports = Delvr;