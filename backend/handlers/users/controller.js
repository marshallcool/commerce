'use strict';


const mongoose      = require('../../modules/db').mongoose;
const uuidV4        = require('uuid/v4');
const Usr           = require('../../db-modules/usr');
const nodemailer    = require('nodemailer');

module.exports =
{
    params: {

        userById: function*(id, next) {
            this.params.userId=id;
            yield* next;
        }

    },

    //Получить пользователя по GET
    getUsersByGET: function*(next)
    {
        let usrs=yield Usr.find({email:this.query.mail, pass:this.query.pass});
        this.body=usrs;
    },
    /*
    //Получить пользователя по POST
    getUsersByPOST: function*(next)
    {
        let dat=this.request.body.dat;
        let usrs=yield Usr.find({email:dat.mail, pass:dat.pass});
        this.body=usrs;
    },

    //Получить одного пользователя по id GET/POST
    getOneUser: function*(next)
    {
        let usrs=yield Usr.findOne({id:this.params.userId});
        this.body=usrs;
    }
    */

    //Регистрация
    signup: function*(next)
    {
        /*
        yield this.validateBody(
            {
                fnam: 'required|minLength:2'
            },
            {
                'fnam.minLength': 'minLength-123'
            }
        );

        if(this.validationErrors)
        {
            this.status = 422;
            this.body = this.validationErrors;
        }
        else
        {
            this.status = 200;
            this.body = 'ok';
        }
        */
        let email=this.request.body.email;
        let pass=this.request.body.pass;
        let pass2=this.request.body.pass2;
        let fnam=this.request.body.fnam;
        let snam=this.request.body.snam;
        let lnam=this.request.body.lnam;
        let phone=this.request.body.phone;
        let nick=this.request.body.nick;
        let plc_id=this.request.body.plc_id;
        let plc_typ=this.request.body.plc_typ;
        let plc_map=this.request.body.plc_map;
        let addr=this.request.body.addr;

        //Проверка существует ли пользователь с таким email
        let resp={
            //0-ok 1-error
            success:true,

            //Сообщение об ошибке
            errMsg:'',

            //Код ошибки:
            //0-email уже занят
            //1-пароли не совпадают
            //2-пароль слишком короткий
            //3-пароль слишком простой
            //4-Не все поля заполнены верно
            //5-Ошибка валидации полей
            errCode:0
        };
        //console.log(this.request.body);

        //Проверка email
        let cntUsrs=yield Usr.findOne({email:email}).count();

        //Ошибка
        if(cntUsrs==1)
        {
            resp.success=false;
            resp.errMsg='Такой e-mail уже занят';
            resp.errCode=0;
        }
        /*
        //Проверка идентичности паролей
        if(!resp.success && pass!=pass2)
        {
            resp.success=false;
            resp.errMsg='Пароли не совпадают';
            resp.errCode=1;
        }

        //Проверка длины паролей
        if(!resp.success && pass.length<minPassLen )
        {
            resp.success=false;
            resp.errMsg='Пароль слишком короткий';
            resp.errCode=2;
        }

        //Проверка длины паролей
        if(!resp.success && pass.length>maxPassLen )
        {
            resp.success=false;
            resp.errMsg='Пароль слишком длинный';
            resp.errCode=3;
        }
        */


        if(resp.success)
        {
            let usr=new Usr();
            usr.id=uuidV4();
            usr.email=email;
            usr.fnam=fnam;
            usr.snam=snam;
            usr.lnam=lnam;
            usr.phone=phone;
            usr.pass=pass;
            usr.pass2=pass2;
            usr.nick=nick;
            usr.plc_id=plc_id;
            usr.plc_typ=plc_typ;
            usr.plc_map=plc_map;
            usr.addr=addr;
            //usr.pubid=uuidV4();
            usr.save();

            //mail send


            // create reusable transporter object using the default SMTP transport
            let transporter = nodemailer.createTransport({
                //service: 'gmail',
                service: 'mail.ru',
                auth: {
                    user: 'test-mail-1991@mail.ru',
                    pass: '12345678aaa'
                }
            });

            let txt="Для подтверждения пройдите по этой ссылке http://127.0.0.1:9000/confirmemail?id=123";
            let href="Для подтверждения пройдите по этой ссылке <a href='http://127.0.0.1:9000/confirmemail?id=123'>http://127.0.0.1:9000/confirmemail?id=123</a>";
            // setup email data with unicode symbols
            let mailOptions = {
                from: '"Test email user" <test-mail-1991@mail.ru>', // sender address
                //to: 'email, iiiiihhaaa@mail.ru', // list of receivers
                to: email,
                subject: 'Confirmation email', // Subject line
                text: txt, // plain text body
                html: href // html body
            };

            transporter.sendMail(mailOptions,
                function(err){
                if(err){
                    if (err) {return console.log(err);}
                    // check if htmlstream is still open and close it to clean up
                    //console.log('Message %s sent: %s', info.messageId, info.response);
                }
                console.log('Message was sent successful');
            });

            /*
            // send mail with defined transport object
            transporter.sendMail(mailOptions, (error, info) {
                if (error) {return console.log(error);}
                console.log('Message %s sent: %s', info.messageId, info.response);
            });
            */
        }
        this.body=resp;


        /*
         //Ид пользователя
         id:Number,

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
         pass:String,

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
         pubid:Number
         */
        //this.request.body.email
        //{email:this.request.body.email, pass:dat.pass}
        //let usrs=yield Usr.find({email:this.query.mail, pass:this.query.pass});
        //this.body=usrs;
    },

    //Авторизция
    signin: function*(next)
    {

    }
};

