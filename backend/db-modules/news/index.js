'use strict';


const mongoose = require('../../modules/db').mongoose;

//Новости
let News;

let newsSchema = new mongoose.Schema({
    //Заголовок новости
    title:String,

    //Текст новости
    txt:String,

    // Список приаттаченных
    // файлов/картинок/ссылок
    // в виде массивов id
    attch:{}
});

News = mongoose.model('News', newsSchema);
module.exports = News;