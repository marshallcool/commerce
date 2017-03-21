'use strict';


const mongoose    = require('../../modules/db').mongoose;

//DB-Models
const Contacts  =require('../../db-modules/contacts');

module.exports =
{
    //Получение контактов
    getContacts: function*(next)
    {
        let contacts=yield Contacts.find().sort({'num':1});
        this.body=contacts;
    }
};
