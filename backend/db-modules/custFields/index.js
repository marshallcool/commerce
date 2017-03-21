'use strict';


const mongoose = require('../../modules/db').mongoose;

//Пользовательские поля
let CustFields;

let custFieldsSchema = new mongoose.Schema({
    //Тип поля
    typ:Number,

    //Подпись поля
    lbl:String,

    //Настройка поля (Список/Координат карты и т д)
    fval:{}
});

CustFields = mongoose.model('CustFields', custFieldsSchema);
module.exports = CustFields;

