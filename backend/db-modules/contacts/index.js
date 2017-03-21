'use strict';


const mongoose = require('../../modules/db').mongoose;

//Контакты
let Contacts;

let contactsSchema = new mongoose.Schema({
    //Порядковый номер на выводе
    num:Number,

    //Тип контакта телефон/email/адрес
    typ:Number,

    //Данные контакта
    dat:[],

    //Комментарии
    cmnts:String
});

Contacts = mongoose.model('Contacts', contactsSchema);
module.exports = Contacts;