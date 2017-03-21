'use strict';


const mongoose = require('../../modules/db').mongoose;

//Сессии
let Sessions;

let sessionsSchema = new mongoose.Schema({
    //Ид сессии
    sessid:String,

    //Идентификатор пользователя для восстановления входа
    usrid:Number
});

Sessions = mongoose.model('Sessions', sessionsSchema);
module.exports = Sessions;