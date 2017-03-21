'use strict';


const mongoose = require('../../modules/db').mongoose;

//Магазины с физическим расположением
let Shops;

let shopsSchema = new mongoose.Schema({
    //Магазин
    nam:String,

    //Контакты магазина
    contacts:[],

    //Местоположение на карте
    plc:{}
});

Shops = mongoose.model('Shops', shopsSchema);
module.exports = Shops;