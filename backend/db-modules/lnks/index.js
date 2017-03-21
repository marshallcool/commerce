'use strict';


const mongoose = require('../../modules/db').mongoose;

//Ссылки
let Lnks;

let lnksSchema = new mongoose.Schema({
    //Ссылка
    lnk:String,

    //Внутренняя/Внешняя ссылка
    typ:Number
});

Lnks = mongoose.model('Lnks', lnksSchema);
module.exports = Lnks;