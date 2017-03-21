'use strict';


const mongoose = require('../../modules/db').mongoose;

//Местоположения
let Places;

let placesSchema = new mongoose.Schema({
    //Ид местоположения
    id:Number,

    //Наименование местоположения
    nam_en:String,

    //Ид региона
    regId:Number,

    //Ид страны
    countryId:Number,

    //Тип местоположения Страна/Регион/Город
    typ:Number,

    //Ширина
    lat:String,

    //Долгота
    lon:String
});

Places = mongoose.model('Places', placesSchema);
module.exports = Places;