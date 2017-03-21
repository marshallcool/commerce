'use strict';


const mongoose = require('../../modules/db').mongoose;

//Диаппазоны ip адресов стран и городов
let PlacesIP;

let placesIPSchema = new mongoose.Schema({
    //Тип местоположения 1-Страна/2-Регион/3-Город
    typ:Number,

    //Ид местоположения
    id:Number,

    //Начальный ip адрес
    bip:Number,

    //Конечный ip адрес
    eip:Number
});

PlacesIP = mongoose.model('PlacesIP', placesIPSchema);
module.exports = PlacesIP;

