'use strict';


const mongoose = require('../../modules/db').mongoose;

//Спецпредложения раздел
let SpOffers;

let spoffersSchema = new mongoose.Schema({
    //Заголовок предложения
    title:String,

    //Описание предложения
    dscr:String,

    //Диаппазон дат действия
    dt:{},

    //Ссылки на категории или на продукты выводятся списком
    ids:{}
});

SpOffers = mongoose.model('SpOffers', spoffersSchema);
module.exports = SpOffers;