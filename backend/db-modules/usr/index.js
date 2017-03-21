'use strict';


const mongoose = require('../../modules/db').mongoose;
const crypto = require('crypto');
const config = require('../../../config');

//Пользователи
let Usr;

let usrSchema = new mongoose.Schema({
    //Ид пользователя
    //id:String,

    //Имя
    fnam:String,

    //Отчество
    snam:String,

    //Фамилия
    lnam:String,

    //Телефон
    phones:{},

    //Почта
    email:String,

    //Пароль
    //pass:String,

    //Псевдоним
    nick:String,

    //Ид местоположения
    plc_id:String,

    //Тип местоположения
    plc_typ:Number,

    //Адрес проживания/доставки
    addr:{},

    //Заблокирован
    blkd:Number,

    //Причина блокировки
    blkmsg:String,

    //Дата/Время последней попытки входа
    authlst:{
        type:Date,
        default: Date.now
    },

    //Количество попыток входа до блокировки
    authcntblk:Number,

    //Публичный id пользователя для прямых ссылок
    pubid:Number,

    //Хэш пароля
    passwordHash:String,

    //Пароль в открытом виде
    _plainPassword:String,

    //Соль
    salt:String
});



//Виртуальное поле pass при установке котогоро сохраняется поле passwordHash
//а в _plainPassword сохраняется пароль в открытом виде
usrSchema.virtual('password')
.set(function(password)
{
    if (password !== undefined)
    {
        if (password.length < 4)
        {
            this.invalidate('password','Error password length');
        }
    }
    this._plainPassword = password;
    if (password)
    {
        this.salt = crypto
            .randomBytes(config.crypto.hash.length)
            .toString('base64');
        this.passwordHash = passwordHash(password, this.salt);
    }
    else
    {
        this.salt = undefined;
        this.passwordHash = undefined;
    }
})
.get(function()
{
    return this._plainPassword;
});



//STATICS
usrSchema.statics.getInfoFields = function(usr)
{
    return {
        _id: usr._id,
        id: usr._id,
        email:usr.email,
        fnam: usr.fnam,
        lnam: usr.lnam,
        hasPassword: Boolean(usr.passwordHash),
        created: usr.created
    };
};



//METHODS
usrSchema.methods.checkPassword = function(password)
{
    if (!password) return false;
    if (!this.passwordHash) return false;
    return passwordHash(password, this.salt) == this.passwordHash;
};

usrSchema.methods.getInfoFields = function()
{
    return Usr.getInfoFields(this);
};


Usr = mongoose.model('Usr', usrSchema);


function passwordHash(password, salt)
{
    let iterations = config.crypto.hash.iterations;
    let length = config.crypto.hash.length;
    return crypto.pbkdf2Sync(password, salt, iterations, length, 'sha512');
}

module.exports = Usr;