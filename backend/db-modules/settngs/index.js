'use strict';


const mongoose = require('../../modules/db').mongoose;

//Настройки
let Settngs;

let settngsSchema = new mongoose.Schema({
    //тип значения 1-txt/2-vali/3-valf/4-vald/5-obj
    typ:Number,

    //Строка настройки
    txt:String,

    //Целое
    vali:Number,

    //Дробное
    valf:Number,

    //Дата
    vald:{
        type:Date,
        default: Date.now
    },

    //Объект
    obj:{},

    //Константа - ключ
    cnstid:String
});

Settngs = mongoose.model('Settngs', settngsSchema);
module.exports = Settngs;

