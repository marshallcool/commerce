'use strict';


const mongoose = require('../../modules/db').mongoose;

//Языки
let Lngs;

let lngsSchema = new mongoose.Schema({
    //Префикс языка
    pref:String,

    //Иконка языка
    icn:String,

    //Название языка
    nam_en:String
});

Lngs = mongoose.model('Lngs', lngsSchema);
module.exports = Lngs;

