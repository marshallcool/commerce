'use strict';


const mongoose    = require('../../modules/db').mongoose;
//DB-Models
const Ads       =require('../../db-modules/ads');
const Arch      =require('../../db-modules/arch');
const Categ     =require('../../db-modules/categ');
const Product   =require('../../db-modules/product');
const CatProdSv =require('../../db-modules/catProdSv');
const Contacts  =require('../../db-modules/contacts');
const CustFields=require('../../db-modules/custFields');
const Delvr     =require('../../db-modules/delvr');
const Gals      =require('../../db-modules/gals');
const Lngs      =require('../../db-modules/lngs');
const Lnks      =require('../../db-modules/lnks');
const News      =require('../../db-modules/news');
const Orders    =require('../../db-modules/orders');
const Places    =require('../../db-modules/places');
const PlacesIP  =require('../../db-modules/placesIP');
const Sessions  =require('../../db-modules/sessions');
const Settngs   =require('../../db-modules/settngs');
const Shops     =require('../../db-modules/shops');
const SpOffers  =require('../../db-modules/spoffers');
const Usr       =require('../../db-modules/usr');
const UsrAd     =require('../../db-modules/usrAd');
const Vouchers  =require('../../db-modules/vouchers');



function passwordHash(password, salt)
{
    let iterations = config.crypto.hash.iterations;
    let length = config.crypto.hash.length;
    return crypto.pbkdf2Sync(password, salt, iterations, length, 'sha512');
}


const demodata= {
    //Рекламма
    ads:{
        repeat:10,
        arr:[
            // 0-Простой текст
            {
                id:1,           //Ид баннера
                idSld:1,        //Ид слайда
                num:1,          //Порядковый номера слайда в баннере
                // Тип баннера
                // 0-Простой текст
                // 1-Одиночная картинка
                // 2-Одиночная флешка
                typ:0,
                //Место размещения баннера
                // 0 - Шапка
                // 1 - Между товарами
                // 2 - Левая панель
                // 3 - Правая панель
                // 4 - Футер
                plctyp:0,               //Заголовов слайда
                title:'Заголовок баннера1',
                dscr:'Description1',    //Текст слайда
                pth:'',
                views:0,
                clks:0,
                vh:1,//Вид баннера 1-Гроизонтальный 2-вертикальный
                //Размер баннера (0-... 1-...)
                sz:0,
                dtSell:'2017-05-01 00:00:00',
                //Ид продуктов ы деталях которых будет отображена рекламма
                prodIds:[1,2,3],
                //Ид категорий в которых будет показан баннер
                catIds:[1,2,3],
                // Настройки отображения баннера
                // (выравнивание, растяжение,
                // размер шрифта для текстовых баннеров,
                // цвет текста, цвет фона)
                viewStngs:{
                    algn:1,
                    scl:1,
                    fnt:14,
                    tclr:"#FF0000",
                    bclr:"#000000"
                },
                usrAdId:1
            },
            // 1-Одиночная картинка
            {
                id:1,           //Ид баннера
                idSld:2,        //Ид слайда
                num:2,          //Порядковый номера слайда в баннере
                // Тип баннера
                // 0-Простой текст
                // 1-Одиночная картинка
                // 2-Одиночная флешка
                // 3-Серия текстовых слайдов
                // 4-Серия картинок
                typ:1,
                //Место размещения баннера
                // 0 - Шапка
                // 1 - Между товарами
                // 2 - Левая панель
                // 3 - Правая панель
                // 4 - Футер
                plctyp:0,               //Заголовов слайда
                title:'Заголовок баннера1',
                dscr:'Description1',    //Текст слайда
                pth:'/images/img1.jpg',
                views:0,
                clks:0,
                vh:1,//Вид баннера 1-Гроизонтальный 2-вертикальный
                //Размер баннера (0-... 1-...)
                sz:0,
                dtSell:'2017-05-01 00:00:00',
                //Ид продуктов ы деталях которых будет отображена рекламма
                prodIds:[1,2,3],
                //Ид категорий в которых будет показан баннер
                catIds:[1,2,3],
                // Настройки отображения баннера
                // (выравнивание, растяжение,
                // размер шрифта для текстовых баннеров,
                // цвет текста, цвет фона)
                viewStngs:{
                    algn:1,
                    scl:1,
                    fnt:14,
                    tclr:"#FF0000",
                    bclr:"#000000"
                },
                usrAdId:1
            },
            // 2-Одиночная флешка
            {
                id:1,           //Ид баннера
                idSld:3,        //Ид слайда
                num:3,          //Порядковый номера слайда в баннере
                // Тип баннера
                // 0-Простой текст
                // 1-Одиночная картинка
                // 2-Одиночная флешка
                // 3-Серия текстовых слайдов
                // 4-Серия картинок
                typ:2,
                //Место размещения баннера
                // 0 - Шапка
                // 1 - Между товарами
                // 2 - Левая панель
                // 3 - Правая панель
                // 4 - Футер
                plctyp:0,               //Заголовов слайда
                title:'Заголовок баннера1',
                dscr:'Description1',    //Текст слайда
                pth:'/images/flsh1.swf',
                views:0,
                clks:0,
                vh:1,//Вид баннера 1-Гроизонтальный 2-вертикальный
                //Размер баннера (0-... 1-...)
                sz:0,
                dtSell:'2017-05-01 00:00:00',
                //Ид продуктов ы деталях которых будет отображена рекламма
                prodIds:[1,2,3],
                //Ид категорий в которых будет показан баннер
                catIds:[1,2,3],
                // Настройки отображения баннера
                // (выравнивание, растяжение,
                // размер шрифта для текстовых баннеров,
                // цвет текста, цвет фона)
                viewStngs:{
                    algn:1,
                    scl:1,
                    fnt:14,
                    tclr:"#FF0000",
                    bclr:"#000000"
                },
                usrAdId:1
            }
        ]
    },

    //Архив товаров и описаний
    arch: {
        repeat: 1,
        arr: [
            {
                title_en:'Product1',
                dscr_en:'Description1',
                lnks:['http://google.ru','http://ya.ru','http://yahoo.com'],
                price:10010,
                attch:{
                    gals:[
                        [
                            {
                                typ:0,//Картинка
                                pth:'/images/arch/img1.jpg',
                                idgal:1
                            }, {
                                typ:1,//Внешняя картинка
                                pth:'http://www.1366x768.ru/nature/29/park-wallpaper-1366x768.jpg',
                                idgal:1
                            }, {
                                typ:2,//Видео
                                pth:'/images/arch/examle360x260.mp4',
                                idgal:1
                            }, {
                                typ:3,//Внешнее видео
                                pth:'https://www.youtube.com/watch?v=jzBng6ofQXg',
                                idgal:1
                            }
                        ], [
                            {
                                typ:1,//Внешняя картинка
                                pth:'http://www.1366x768.ru/nature/29/park-wallpaper-1366x768.jpg',
                                idgal:2
                            },
                            {
                                typ:3,//Внешнее видео
                                pth:'https://www.youtube.com/watch?v=jzBng6ofQXg',
                                idgal:2
                            }
                        ]
                    ]
                }
            }, {
                title_en:'Product2',
                dscr_en:'Description2',
                lnks:[],
                price:20020,
                attch:{}
            }, {
                title_en:'Product3',
                dscr_en:'Description3',
                lnks:[],
                price:30030,
                attch:{}
            }, {
                title_en: 'Product4',
                dscr_en: 'Description4',
                lnks: [],
                price: 50040,
                attch: {}
            }
        ]
    },

    //Категории
    categ:
    {
        repeat: 1,
        arr: [
            {
                idn: 1,
                lk: 1,
                rk: 30,
                lev: 1,
                nam_en: 'Категории',
                num: 1,
                parid: null,
                parid_: -1,
                stngs: {},
                icn: {sml: 'no-sml.png', big: 'no-big.png'},
                prodCnt:10
            }, {
                idn: 2,
                lk: 2,
                rk: 15,
                lev: 2,
                nam_en: 'Cat2',
                num: 2,
                parid: null,
                parid_: 1,
                stngs: {},
                icn: {sml: 'no-sml.png', big: 'no-big.png'},
                prodCnt:11
            }, {
                idn: 3,
                lk: 3,
                rk: 8,
                lev: 3,
                nam_en: 'Cat3',
                num: 3,
                parid: null,
                parid_: 2,
                stngs: {},
                icn: {sml: 'no-sml.png', big: 'no-big.png'},
                prodCnt:12
            }, {
                idn: 4,
                lk: 4,
                rk: 5,
                lev: 4,
                nam_en: 'Cat4',
                num: 4,
                parid: null,
                parid_: 3,
                stngs: {},
                icn: {sml: 'no-sml.png', big: 'no-big.png'},
                prodCnt:13
            }, {
                idn: 5,
                lk: 6,
                rk: 7,
                lev: 4,
                nam_en: 'Cat5',
                num: 5,
                parid: null,
                parid_: 3,
                stngs: {},
                icn: {sml: 'no-sml.png', big: 'no-big.png'},
                prodCnt:14
            }, {
                idn: 6,
                lk: 9,
                rk: 14,
                lev: 3,
                nam_en: 'Cat6',
                num: 6,
                parid: null,
                parid_: 2,
                stngs: {},
                icn: {sml: 'no-sml.png', big: 'no-big.png'},
                prodCnt:15
            }, {
                idn: 7,
                lk: 10,
                rk: 11,
                lev: 4,
                nam_en: 'Cat7',
                num: 7,
                parid: null,
                parid_: 6,
                stngs: {},
                icn: {sml: 'no-sml.png', big: 'no-big.png'},
                prodCnt:16
            }, {
                idn: 8,
                lk: 12,
                rk: 13,
                lev: 4,
                nam_en: 'Cat8',
                num: 2,
                parid: null,
                parid_: 6,
                stngs: {},
                icn: {sml: 'no-sml.png', big: 'no-big.png'},
                prodCnt:11
            }, {
                idn: 9,
                lk: 16,
                rk: 29,
                lev: 2,
                nam_en: 'Cat9',
                num: 3,
                parid: null,
                parid_: 1,
                stngs: {},
                icn: {sml: 'no-sml.png', big: 'no-big.png'},
                prodCnt:12
            }, {
                idn: 10,
                lk: 17,
                rk: 22,
                lev: 3,
                nam_en: 'Cat10',
                num: 4,
                parid: null,
                parid_: 9,
                stngs: {},
                icn: {sml: 'no-sml.png', big: 'no-big.png'},
                prodCnt:13
            }, {
                idn: 11,
                lk: 18,
                rk: 19,
                lev: 4,
                nam_en: 'Cat11',
                num: 5,
                parid: null,
                parid_: 10,
                stngs: {},
                icn: {sml: 'no-sml.png', big: 'no-big.png'},
                prodCnt:14
            }, {
                idn: 12,
                lk: 20,
                rk: 21,
                lev: 4,
                nam_en: 'Cat12',
                num: 6,
                parid: null,
                parid_: 10,
                stngs: {},
                icn: {sml: 'no-sml.png', big: 'no-big.png'},
                prodCnt:15
            }, {
                idn: 13,
                lk: 23,
                rk: 28,
                lev: 3,
                nam_en: 'Cat13',
                num: 7,
                parid: null,
                parid_: 9,
                stngs: {},
                icn: {sml: 'no-sml.png', big: 'no-big.png'},
                prodCnt:16
            }, {
                idn: 14,
                lk: 24,
                rk: 25,
                lev: 4,
                nam_en: 'Cat14',
                num: 2,
                parid: null,
                parid_: 13,
                stngs: {},
                icn: {sml: 'no-sml.png', big: 'no-big.png'},
                prodCnt:11
            }, {
                idn: 15,
                lk: 26,
                rk: 27,
                lev: 4,
                nam_en: 'Cat15',
                num: 3,
                parid: null,
                parid_: 13,
                stngs: {},
                icn: {sml: 'no-sml.png', big: 'no-big.png'},
                prodCnt:12
            }
        ]
    },

    //Продукты
    product:
    {
        repeat:1,
        arr:
            [
                {
                    id:1,
                    title_en:'Product1',
                    dscr_en:'Description1',
                    lnks:[
                        {
                            title_en:'Link1',
                            lnk:'http://google.ru'
                        },{
                            title_en:'Link2',
                            lnk:'http://google.ru'
                        }
                    ],
                    price:100000,
                    //Скидки, цены и диапазоны дат действия
                    offrs:[
                        {
                            typ:1,//Скидка 5 руб
                            price:500,
                            dtdiff:{
                                fr:-1,
                                to:-1
                            }
                        }, {
                            typ:2,//Скидка 20%
                            price:2000,
                            dtdiff:{
                                fr:'2015-01-01',
                                to:'2017-01-01'
                            }
                        }
                    ],
                    //Количество товара при заказе которого дается 1 бесплатный товар
                    freepolicy:{cnt:2,fre:3},
                    //Ид категории если 1 товар входит в 1 категорию
                    categId:1,
                    gallery:
                    {
                        main:0,     //Номер главного слайда, используется как основное изображение продукта
                        autostrt:1, //Автоматически запускать ротацию слайдов,
                        tmShow:5000,//Время показа слайда в милли-секундах
                        arr:[
                            {            //Если слайд один то никакой ротации не выполняется
                                         //Если слайдов нет показывается загрушка no-product.png
                                typ: 0,  // 0-Локальное Фото
                                         // 1-Внешнее фото
                                         // 2-Локальное видео
                                         // 3-Внешнее видео
                                         // 4-Локальное аудио
                                         // 5-Внешнее аудио
                                         // 6-Локальная флешка
                                         // 7-внешняя флешка
                                subtyp: 0,   //1-youtube видео
                                             //2-vimeo видео
                                             //1001-mp3
                                             //1002-mid
                                title: 'Заголовок слайд 1',
                                txt: 'Подпись слайд 1 Локальное Фото',
                                pth: 'img1.jpg',
                                num: 0,
                                effectNum: 0    //Номер анимационного эффекта при завершении показа слайда
                            },
                            {
                                typ: 0,
                                subtyp: 0,
                                title: 'Заголовок слайд 2',
                                txt: 'Подпись слайд 2 Локальное Фото',
                                pth: 'img2.jpg',
                                num: 1,
                                effectNum: 0
                            },
                            {
                                typ: 0,
                                subtyp: 0,
                                title: 'Заголовок слайд 3',
                                txt: 'Подпись слайд 3 Локальное Фото',
                                pth: 'img3.jpg',
                                num: 2,
                                effectNum: 0
                            },
                            {
                                typ: 1,
                                subtyp: 0,
                                title: 'Заголовок слайд 4',
                                txt: 'Подпись слайд 4 Внешнее Фото',
                                pth: 'img3.jpg',
                                num: 3,
                                effectNum: 0
                            },
                            {
                                typ: 2,
                                subtyp: 0,
                                title: 'Заголовок слайд 5',
                                txt: 'Подпись слайд 5 Локальное видео',
                                pth: 'examle360x260.mp4',
                                num: 4,
                                effectNum: 0
                            },
                            {
                                typ: 3,
                                subtyp: 1,
                                title: 'Заголовок слайд 6',
                                txt: 'Подпись слайд 6 Внешнее видео youtube',
                                pth: 'https://www.youtube.com/watch?v=oaII9G-WfzA&t=3s',
                                num: 5,
                                effectNum: 0
                            },
                            {
                                typ: 3,
                                subtyp: 2,
                                title: 'Заголовок слайд 7',
                                txt: 'Подпись слайд 7 Внешнее видео vimeo',
                                pth: 'https://vimeo.com/184447659',
                                num: 6,
                                effectNum: 0
                            },
                            {
                                typ: 4,
                                subtyp: 1001,
                                title: 'Заголовок слайд 8',
                                txt: 'Подпись слайд 8 Локальное аудио',
                                pth: '02-guerilla-war.mp3',
                                num: 7,
                                effectNum: 0
                            },
                            {
                                typ: 5,
                                subtyp: 1002,
                                title: 'Заголовок слайд 9',
                                txt: 'Подпись слайд 9 Внешнее аудио',
                                pth: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
                                num: 8,
                                effectNum: 0
                            },
                            {
                                typ: 6,
                                subtyp: 0,
                                title: 'Заголовок слайд 10',
                                txt: 'Подпись слайд 10 Локальная флешка',
                                pth: 'flashex.swf',
                                num: 9,
                                effectNum: 0
                            },
                            {
                                typ: 7,
                                subtyp: 0,
                                title: 'Заголовок слайд 11',
                                txt: 'Подпись слайд 11 Внешняя флешка',
                                pth: 'http://samples.mplayerhq.hu/SWF/test.swf',
                                num: 10,
                                effectNum: 0
                            }
                        ]
                    }
                }, {
                    id:2,
                    title_en:'Product2',
                    dscr_en:'Description2',
                    price:200010,
                    categId:1,
                    lnks:[
                        {
                            title_en:'Link2-1',
                            lnk:'http://google.ru2-1'
                        },{
                            title_en:'Link2-2',
                            lnk:'http://google.ru2-2'
                        }
                    ],
                    //Скидки, цены и диапазоны дат действия
                    offrs:[
                        {
                            typ:1,//Скидка 5 руб
                            price:30,
                            dtdiff:{
                                fr:-1,
                                to:-1
                            }
                        }
                    ],
                    freepolicy:{cnt:-1,fre:1},
                    gallery:{main:0,autostrt:1,tmShow:5000,arr:[]}
                }, {
                    id:3,
                    title_en: 'Product3',
                    dscr_en: 'Description3',
                    price: 300020,
                    categId: 1,
                    lnks:[],
                    offrs:[],
                    freepolicy:{cnt:-1,fre:1},
                    gallery:{main:0,autostrt:1,tmShow:5000,arr:[]}
                }, {
                    id:4,
                    title_en: 'Product4',
                    dscr_en: 'Description4',
                    price: 400010,
                    categId: 1,
                    lnks:[],
                    offrs:[],
                    freepolicy:{cnt:-1,fre:1},
                    gallery:{main:0,autostrt:1,tmShow:5000,arr:[]}
                }, {
                    id:5,
                    title_en: 'Product5',
                    dscr_en: 'Description5',
                    price: 100050,
                    categId: 1,
                    lnks:[],
                    offrs:[],
                    freepolicy:{cnt:-1,fre:1},
                    gallery:{main:0,autostrt:1,tmShow:5000,arr:[]}
                }, {
                    id:6,
                    title_en: 'Product6',
                    dscr_en: 'Description6',
                    price: 100071,
                    categId: 1,
                    lnks:[],
                    offrs:[],
                    freepolicy:{cnt:-1,fre:1},
                    gallery:{main:0,autostrt:1,tmShow:5000,arr:[]}
                }, {
                    id:7,
                    title_en: 'Product7',
                    dscr_en: 'Description7',
                    price: 200014,
                    categId: 1,
                    lnks:[],
                    offrs:[],
                    freepolicy:{cnt:-1,fre:1},
                    gallery:{main:0,autostrt:1,tmShow:5000,arr:[]}
                },
                { id:8,     title_en: 'Product8',     dscr_en: 'Description8', categId: 2, price: 10050 ,lnks:[],offrs:[],freepolicy:{cnt:-1,fre:1},gallery:{main:0,autostrt:1,tmShow:5000,arr:[]}},
                { id:9,     title_en: 'Product9',     dscr_en: 'Description9', categId: 2, price: 10050 ,lnks:[],offrs:[],freepolicy:{cnt:-1,fre:1},gallery:{main:0,autostrt:1,tmShow:5000,arr:[]}},
                { id:10,    title_en: 'Product10',    dscr_en: 'Description10', categId: 3, price: 10050 ,lnks:[],offrs:[],freepolicy:{cnt:-1,fre:1},gallery:{main:0,autostrt:1,tmShow:5000,arr:[]}},
                { id:11,    title_en: 'Product11',    dscr_en: 'Description11', categId: 3, price: 10050 ,lnks:[],offrs:[],freepolicy:{cnt:-1,fre:1},gallery:{main:0,autostrt:1,tmShow:5000,arr:[]}},
                { id:12,    title_en: 'Product12',    dscr_en: 'Description12', categId: 4, price: 10050 ,lnks:[],offrs:[],freepolicy:{cnt:-1,fre:1},gallery:{main:0,autostrt:1,tmShow:5000,arr:[]}},
                { id:13,    title_en: 'Product13',    dscr_en: 'Description13', categId: 4, price: 10050 ,lnks:[],offrs:[],freepolicy:{cnt:-1,fre:1},gallery:{main:0,autostrt:1,tmShow:5000,arr:[]}},
                { id:14,    title_en: 'Product14',    dscr_en: 'Description14', categId: 5, price: 10050 ,lnks:[],offrs:[],freepolicy:{cnt:-1,fre:1},gallery:{main:0,autostrt:1,tmShow:5000,arr:[]}},
                { id:15,    title_en: 'Product15',    dscr_en: 'Description15', categId: 5, price: 10050 ,lnks:[],offrs:[],freepolicy:{cnt:-1,fre:1},gallery:{main:0,autostrt:1,tmShow:5000,arr:[]}},
                { id:16,    title_en: 'Product16',    dscr_en: 'Description16', categId: 6, price: 10050 ,lnks:[],offrs:[],freepolicy:{cnt:-1,fre:1},gallery:{main:0,autostrt:1,tmShow:5000,arr:[]}},
                { id:17,    title_en: 'Product17',    dscr_en: 'Description17', categId: 6, price: 10050 ,lnks:[],offrs:[],freepolicy:{cnt:-1,fre:1},gallery:{main:0,autostrt:1,tmShow:5000,arr:[]}},
                { id:18,    title_en: 'Product18',    dscr_en: 'Description18', categId: 7, price: 10050 ,lnks:[],offrs:[],freepolicy:{cnt:-1,fre:1},gallery:{main:0,autostrt:1,tmShow:5000,arr:[]}},
                { id:19,    title_en: 'Product19',    dscr_en: 'Description19', categId: 7, price: 10050 ,lnks:[],offrs:[],freepolicy:{cnt:-1,fre:1},gallery:{main:0,autostrt:1,tmShow:5000,arr:[]}},
                { id:20,    title_en: 'Product20',    dscr_en: 'Description20', categId: 8, price: 10050 ,lnks:[],offrs:[],freepolicy:{cnt:-1,fre:1},gallery:{main:0,autostrt:1,tmShow:5000,arr:[]}},
                { id:21,    title_en: 'Product21',    dscr_en: 'Description21', categId: 8, price: 10050 ,lnks:[],offrs:[],freepolicy:{cnt:-1,fre:1},gallery:{main:0,autostrt:1,tmShow:5000,arr:[]}},
                { id:22,    title_en: 'Product22',    dscr_en: 'Description22', categId: 9, price: 10050 ,lnks:[],offrs:[],freepolicy:{cnt:-1,fre:1},gallery:{main:0,autostrt:1,tmShow:5000,arr:[]}},
                { id:23,    title_en: 'Product23',    dscr_en: 'Description23', categId: 9, price: 10050 ,lnks:[],offrs:[],freepolicy:{cnt:-1,fre:1},gallery:{main:0,autostrt:1,tmShow:5000,arr:[]}},
                { id:24,    title_en: 'Product24',    dscr_en: 'Description24', categId: 10, price: 10050 ,lnks:[],offrs:[],freepolicy:{cnt:-1,fre:1},gallery:{main:0,autostrt:1,tmShow:5000,arr:[]}},
                { id:25,    title_en: 'Product25',    dscr_en: 'Description25', categId: 10, price: 10050 ,lnks:[],offrs:[],freepolicy:{cnt:-1,fre:1},gallery:{main:0,autostrt:1,tmShow:5000,arr:[]}},
                { id:26,    title_en: 'Product26',    dscr_en: 'Description26', categId: 11, price: 10050 ,lnks:[],offrs:[],freepolicy:{cnt:-1,fre:1},gallery:{main:0,autostrt:1,tmShow:5000,arr:[]}},
                { id:27,    title_en: 'Product27',    dscr_en: 'Description27', categId: 12, price: 10050 ,lnks:[],offrs:[],freepolicy:{cnt:-1,fre:1},gallery:{main:0,autostrt:1,tmShow:5000,arr:[]}},
                { id:28,    title_en: 'Product28',    dscr_en: 'Description28', categId: 13, price: 10050 ,lnks:[],offrs:[],freepolicy:{cnt:-1,fre:1},gallery:{main:0,autostrt:1,tmShow:5000,arr:[]}},
                { id:29,    title_en: 'Product29',    dscr_en: 'Description29', categId: 14, price: 10050 ,lnks:[],offrs:[],freepolicy:{cnt:-1,fre:1},gallery:{main:0,autostrt:1,tmShow:5000,arr:[]}},
                { id:30,    title_en: 'Product30',    dscr_en: 'Description30', categId: 15, price: 10050 ,lnks:[],offrs:[],freepolicy:{cnt:-1,fre:1},gallery:{main:0,autostrt:1,tmShow:5000,arr:[]}},

                { id:31,    title_en: 'Product31',    dscr_en: 'Description31', categId: 1, price: 10050 ,lnks:[],offrs:[],freepolicy:{cnt:-1,fre:1},gallery:{main:0,autostrt:1,tmShow:5000,arr:[]}},
                { id:32,    title_en: 'Product32',    dscr_en: 'Description32', categId: 1, price: 10050 ,lnks:[],offrs:[],freepolicy:{cnt:-1,fre:1},gallery:{main:0,autostrt:1,tmShow:5000,arr:[]}},
                { id:33,    title_en: 'Product33',    dscr_en: 'Description33', categId: 1, price: 10050 ,lnks:[],offrs:[],freepolicy:{cnt:-1,fre:1},gallery:{main:0,autostrt:1,tmShow:5000,arr:[]}},
                { id:34,    title_en: 'Product34',    dscr_en: 'Description34', categId: 1, price: 10050 ,lnks:[],offrs:[],freepolicy:{cnt:-1,fre:1},gallery:{main:0,autostrt:1,tmShow:5000,arr:[]}},
                { id:35,    title_en: 'Product35',    dscr_en: 'Description35', categId: 1, price: 10050 ,lnks:[],offrs:[],freepolicy:{cnt:-1,fre:1},gallery:{main:0,autostrt:1,tmShow:5000,arr:[]}},
                { id:36,    title_en: 'Product36',    dscr_en: 'Description36', categId: 1, price: 10050 ,lnks:[],offrs:[],freepolicy:{cnt:-1,fre:1},gallery:{main:0,autostrt:1,tmShow:5000,arr:[]}},
                { id:37,    title_en: 'Product37',    dscr_en: 'Description37', categId: 1, price: 10050 ,lnks:[],offrs:[],freepolicy:{cnt:-1,fre:1},gallery:{main:0,autostrt:1,tmShow:5000,arr:[]}},
                { id:38,    title_en: 'Product38',    dscr_en: 'Description38', categId: 1, price: 10050 ,lnks:[],offrs:[],freepolicy:{cnt:-1,fre:1},gallery:{main:0,autostrt:1,tmShow:5000,arr:[]}},
                { id:39,    title_en: 'Product39',    dscr_en: 'Description39', categId: 1, price: 10050 ,lnks:[],offrs:[],freepolicy:{cnt:-1,fre:1},gallery:{main:0,autostrt:1,tmShow:5000,arr:[]}},
                { id:40,    title_en: 'Product40',    dscr_en: 'Description40', categId: 1, price: 10050 ,lnks:[],offrs:[],freepolicy:{cnt:-1,fre:1},gallery:{main:0,autostrt:1,tmShow:5000,arr:[]}},
                { id:41,    title_en: 'Product41',    dscr_en: 'Description41', categId: 1, price: 10050 ,lnks:[],offrs:[],freepolicy:{cnt:-1,fre:1},gallery:{main:0,autostrt:1,tmShow:5000,arr:[]}},
                { id:42,    title_en: 'Product42',    dscr_en: 'Description42', categId: 1, price: 10050 ,lnks:[],offrs:[],freepolicy:{cnt:-1,fre:1},gallery:{main:0,autostrt:1,tmShow:5000,arr:[]}},
                { id:43,    title_en: 'Product43',    dscr_en: 'Description43', categId: 1, price: 10050 ,lnks:[],offrs:[],freepolicy:{cnt:-1,fre:1},gallery:{main:0,autostrt:1,tmShow:5000,arr:[]}},
                { id:44,    title_en: 'Product44',    dscr_en: 'Description44', categId: 1, price: 10050 ,lnks:[],offrs:[],freepolicy:{cnt:-1,fre:1},gallery:{main:0,autostrt:1,tmShow:5000,arr:[]}},
                { id:45,    title_en: 'Product45',    dscr_en: 'Description45', categId: 1, price: 10050 ,lnks:[],offrs:[],freepolicy:{cnt:-1,fre:1},gallery:{main:0,autostrt:1,tmShow:5000,arr:[]}},
                { id:46,    title_en: 'Product46',    dscr_en: 'Description46', categId: 1, price: 10050 ,lnks:[],offrs:[],freepolicy:{cnt:-1,fre:1},gallery:{main:0,autostrt:1,tmShow:5000,arr:[]}},
                { id:47,    title_en: 'Product47',    dscr_en: 'Description47', categId: 1, price: 10050 ,lnks:[],offrs:[],freepolicy:{cnt:-1,fre:1},gallery:{main:0,autostrt:1,tmShow:5000,arr:[]}},
                { id:48,    title_en: 'Product48',    dscr_en: 'Description48', categId: 1, price: 10050 ,lnks:[],offrs:[],freepolicy:{cnt:-1,fre:1},gallery:{main:0,autostrt:1,tmShow:5000,arr:[]}},
                { id:49,    title_en: 'Product49',    dscr_en: 'Description49', categId: 1, price: 10050 ,lnks:[],offrs:[],freepolicy:{cnt:-1,fre:1},gallery:{main:0,autostrt:1,tmShow:5000,arr:[]}},
                { id:50,    title_en: 'Product50',    dscr_en: 'Description50', categId: 1, price: 10050 ,lnks:[],offrs:[],freepolicy:{cnt:-1,fre:1},gallery:{main:0,autostrt:1,tmShow:5000,arr:[]}},
                { id:51,    title_en: 'Product51',    dscr_en: 'Description51', categId: 1, price: 10050 ,lnks:[],offrs:[],freepolicy:{cnt:-1,fre:1},gallery:{main:0,autostrt:1,tmShow:5000,arr:[]}},
                { id:52,    title_en: 'Product52',    dscr_en: 'Description52', categId: 1, price: 10050 ,lnks:[],offrs:[],freepolicy:{cnt:-1,fre:1},gallery:{main:0,autostrt:1,tmShow:5000,arr:[]}},
                { id:53,    title_en: 'Product53',    dscr_en: 'Description53', categId: 1, price: 10050 ,lnks:[],offrs:[],freepolicy:{cnt:-1,fre:1},gallery:{main:0,autostrt:1,tmShow:5000,arr:[]}},
                { id:54,    title_en: 'Product54',    dscr_en: 'Description54', categId: 1, price: 10050 ,lnks:[],offrs:[],freepolicy:{cnt:-1,fre:1},gallery:{main:0,autostrt:1,tmShow:5000,arr:[]}},
                { id:55,    title_en: 'Product55',    dscr_en: 'Description55', categId: 1, price: 10050 ,lnks:[],offrs:[],freepolicy:{cnt:-1,fre:1},gallery:{main:0,autostrt:1,tmShow:5000,arr:[]}},
                { id:56,    title_en: 'Product56',    dscr_en: 'Description56', categId: 1, price: 10050 ,lnks:[],offrs:[],freepolicy:{cnt:-1,fre:1},gallery:{main:0,autostrt:1,tmShow:5000,arr:[]}},
                { id:57,    title_en: 'Product57',    dscr_en: 'Description57', categId: 1, price: 10050 ,lnks:[],offrs:[],freepolicy:{cnt:-1,fre:1},gallery:{main:0,autostrt:1,tmShow:5000,arr:[]}},
                { id:58,    title_en: 'Product58',    dscr_en: 'Description58', categId: 1, price: 10050 ,lnks:[],offrs:[],freepolicy:{cnt:-1,fre:1},gallery:{main:0,autostrt:1,tmShow:5000,arr:[]}},
                { id:59,    title_en: 'Product59',    dscr_en: 'Description59', categId: 1, price: 10050 ,lnks:[],offrs:[],freepolicy:{cnt:-1,fre:1},gallery:{main:0,autostrt:1,tmShow:5000,arr:[]}},
                { id:60,    title_en: 'Product60',    dscr_en: 'Description60', categId: 1, price: 10050 ,lnks:[],offrs:[],freepolicy:{cnt:-1,fre:1},gallery:{main:0,autostrt:1,tmShow:5000,arr:[]}},
                { id:61,    title_en: 'Product61',    dscr_en: 'Description61', categId: 1, price: 10050 ,lnks:[],offrs:[],freepolicy:{cnt:-1,fre:1},gallery:{main:0,autostrt:1,tmShow:5000,arr:[]}},
                { id:62,    title_en: 'Product62',    dscr_en: 'Description62', categId: 1, price: 10050 ,lnks:[],offrs:[],freepolicy:{cnt:-1,fre:1},gallery:{main:0,autostrt:1,tmShow:5000,arr:[]}}
            ]
    },

    //Связь категорий и продуктов,  если продукт входит не в одну категорию
    сatProdSv:
    {
        repeat:1,
        arr:[
            {prodId:1,catId:1},
        ]
    },

    //Контакты
    contacts:{
        repeat:1,
        arr:[
            //emails
            {
                typ:0,
                dat:['iiiiihhaaa@mail.ru','admin@gmail.com'],
                cmnts:'Комментарии emails',
                num:1
            },
            //phones
            {
                typ:1,
                dat:['+79031234567','+79031234568','+79031234569'],
                cmnts:'Комментарии phones',
                num:2
            },
            //faxes
            {
                typ:2,
                dat:['+79031234567','+79031234568','+79031234569'],
                cmnts:'Комментарии faxes',
                num:3
            },
            //Схема проезда на карте
            {
                typ:3,
                dat:[55.7498582,37.3516334],//lat,lon
                cmnts:'Комментарии lat lon',
                num:4
            },
            //Схема проезда картинкой
            {
                typ:4,
                dat:'/images/img1.jpg',
                cmnts:'Комментарии images',
                num:5
            },
            //Мессенджер Skype
            {
                typ:5,
                dat:{typ:0,nam:'messanger_name'},
                cmnts:'Комментарии im messanger',
                num:6
            },
            //Мессенджер ICQ
            {
                typ:5,
                dat:{typ:1,nam:'1234567'},
                cmnts:'Комментарии im messanger',
                num:7
            }
        ]
    },

    //Пользовательские поля
    custFields:
    {
        repeat:1,
        arr:[
            {
                //Тип поля-0 txt
                typ:0,
                lbl:'Подпись поля',
                fval:{txt:'Значение поля'}
            }, {
                //Тип поля-1 droplist
                typ:1,
                lbl:'Выпадающий Список',
                fval:['item1','item2','item3']
            }, {
                //Тип поля-2 openlist
                typ:2,
                lbl:'Раскрытый список',
                fval:['item1','item2','item3']
            }, {
                //Тип поля-3 datediff
                typ:3,
                lbl:'Диаппазон дат',
                fval:{fr:'2017-01-01 00:00:00', to:'2015-01-01 00:00:00'}
            }, {
                //Тип поля-4 dt
                typ:4,
                lbl:'Дата',
                fval:'2017-01-01 00:00:00'
            }, {
                //Тип поля-5 checkbox
                typ:5,
                lbl:'Флажок:',
                fval:1
            }, {
                //Тип поля-6 radio button group
                typ:6,
                lbl:'Группа радиокнопок:',
                fval:[0,0,1]
            }, {
                //Тип поля-7 checkbox group
                typ:7,
                lbl:'Группа флажков:',
                fval:[1,0,1]
            }, {
                //Тип поля-8 Text block
                typ:8,
                lbl:'Текстовый блок:',
                fval:'Текстовый блок'
            }, {
                //Тип поля-9 Слайдер (min:max:step)
                typ:9,
                lbl:'Слайдер:',
                fval:{min:0, max:10, step:1}
            }, {
                //Тип поля-10 fix button
                typ:10,
                lbl:'Кнопки с фиксацией:',
                fval:[0,0,1]
            }, {
                //Тип поля-11 icons group
                typ:11,
                lbl:'Группа иконок с одиночным выбором:',
                fval:{
                    arr:[
                        '/images/prod/img1.jpg',
                        '/images/prod/img2.jpg',
                        '/images/prod/img3.jpg'
                    ],
                    sel:0
                }
            }, {
                //Тип поля-12 icons group multi select
                typ:12,
                lbl:'Группа иконок с множественным выбором:',
                fval:{
                    arr:[
                        '/images/prod/img1.jpg',
                        '/images/prod/img2.jpg',
                        '/images/prod/img3.jpg'
                    ],
                    sel:[0,2]
                }
            }, {
                //Тип поля-13 colors group
                typ:13,
                lbl:'Группа цветов:',
                fval:{
                    arr:[
                        '#FF0000',
                        '#00FF00',
                        '#0000FF'
                    ],
                    sel:[0,2]
                }
            }, {
                //Тип поля-14 color
                typ:14,
                lbl:'Цвет:',
                fval:'#FF0000'
            }
        ]
    },

    //Доставка
    delvr:
    {
        repeat:1,
        arr:[
            {
                //Заголовок доставки
                title: 'Доставка обычной почтой',
                //Описание способа доставки
                txt: 'Доставка осуществляется в течение 14 рабочих дней',
                //Статья-описание вкл-1
                fulltxton:1,
                //Полная статья описания метода доставки
                fulltxt:'Текст статьи о доставке с таблицами и условиями доставки [img1.jpg] и еще внедренная картинка [img2.jpg]',
                //Массив прикрепленных в статью метатегов изображений при удалени сервиса доставки удалятся также картинки из массива
                imgs:['img1.jpg','img2.jpg'],
                //Веб сайт поставщика услуг
                site:'http://google.ru',
                //Возможность отслеживать послылку
                wtch:1,
                //логотип компании
                logo:'img1.jpg',
                //Детальный калькулятор
                detls:{
                    //Вкл/Откл 1-Вкл
                    on:1,
                    typs:[
                        {num:1,title:'Воздухом'},
                        {num:2,title:'Поездом'},
                        {num:3,title:'Морем'},
                        {num:4,title:'Курьером'}                        
                    ],
                    arr:[
                        //Расстояние от, до, цена, тип доставки (воздух/морем/поездом/курьером), вес от вес до
                        {dist_fr:0,     dist_to:100,    price:10010,    typ:1, weight_fr:0,     weight_to:100},
                        {dist_fr:101,   dist_to:1000,   price:20020,    typ:2, weight_fr:101,   weight_to:200},
                        {dist_fr:1001,  dist_to:2000,   price:30030,    typ:3, weight_fr:201,   weight_to:300},
                        {dist_fr:2001,  dist_to:3000,   price:40044,    typ:4, weight_fr:301,   weight_to:999}
                    ]
                }
            }, {
                title: 'Доставка экспресс почтой EMS',
                txt: 'Доставка осуществляется в течение 1 дня',
                fulltxt:'Текст статьи о доставке с таблицами и условиями доставки [img1.jpg] и еще внедренная картинка [img2.jpg]',
                fulltxton:0,
                imgs:['img1.jpg','img2.jpg'],
                site:'http://google.ru',
                wtch:1,
                logo:'img2.jpg',
                detls:{
                    on:0,
                    typs:[],
                    arr:[]
                }
            }, {
                //Вид доставки-DHL
                title: 'Доставка экспресс почтой DHL',
                txt: 'Доставка осуществляется в течение 1 дня',
                fulltxton:0,
                fulltxt:'Текст статьи о доставке с таблицами и условиями доставки [img1.jpg] и еще внедренная картинка [img2.jpg]',
                imgs:['img1.jpg','img2.jpg'],
                site:'http://google.ru',
                wtch:0,
                logo:'img3.jpg',
                detls:{
                    on:0,
                    typs:[],
                    arr:[]
                }
            }
        ]
    },

    //Галлереи фото/видео
    gal:
    {
        repeat:1,
        arr:[
            {
                id:1,
                idgal:1,
                typ:1,//Тип слайда локальное фото
                title:'Локальное фото 1',
                dscr:'Всплывающий текст слайда 1',
                sz:0,
                pth:'/gal/1/img1.jpg',
                prodId:1
            }, {
                id:2,
                idgal:1,
                typ:2,//Тип слайда внешнее фото
                title:'Внешнее фото 2',
                dscr:'Всплывающий текст слайда 2',
                sz:0,
                pth:'http://www.planwallpaper.com/static/images/9-credit-1.jpg',
                prodId:1
            }, {
                id:3,
                idgal:1,
                typ:3,//Тип слайда локальное видео
                title:'Слайд видео 3',
                dscr:'Всплывающий текст слайда 3',
                sz:0,
                pth:'/gal/1/examle360x260.mp4',
                prodId:1
            }, {
                id:4,
                idgal:1,
                typ:4,//Тип слайда внешнее видео
                title:'Слайд видео 4',
                dscr:'Всплывающий текст слайда 4',
                sz:0,
                pth:'http://www.sample-videos.com/video/mp4/240/big_buck_bunny_240p_10mb.mp4',
                prodId:1
            }, {
                id:5,
                idgal:1,
                typ:5,//Тип слайда внутреннее аудио
                title:'Слайд аудио 5',
                dscr:'Всплывающий текст слайда 5',
                sz:0,
                pth:'aud.mp3',
                prodId:1
            }, {
                id:6,
                idgal:1,
                typ:5,//Тип слайда внешнее аудио
                title:'Слайд аудио 6',
                dscr:'Всплывающий текст слайда 6',
                sz:0,
                pth:'http://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
                prodId:1
            },

            {
                id:1,
                idgal:2,
                typ:1,//Тип слайда локальное фото
                title:'Локальное фото 1',
                dscr:'Всплывающий текст слайда 1',
                sz:0,
                pth:'/gal/1/img1.jpg',
                prodId:2
            }, {
                id:2,
                idgal:2,
                typ:2,//Тип слайда внешнее фото
                title:'Внешнее фото 2',
                dscr:'Всплывающий текст слайда 2',
                sz:0,
                pth:'http://www.planwallpaper.com/static/images/9-credit-1.jpg',
                prodId:2
            }, {
                id:3,
                idgal:2,
                typ:3,//Тип слайда локальное видео
                title:'Слайд видео 3',
                dscr:'Всплывающий текст слайда 3',
                sz:0,
                pth:'/gal/1/examle360x260.mp4',
                prodId:2
            }, {
                id:4,
                idgal:2,
                typ:4,//Тип слайда внешнее видео
                title:'Слайд видео 4',
                dscr:'Всплывающий текст слайда 4',
                sz:0,
                pth:'http://www.sample-videos.com/video/mp4/240/big_buck_bunny_240p_10mb.mp4',
                prodId:2
            }, {
                id:5,
                idgal:2,
                typ:5,//Тип слайда внутреннее аудио
                title:'Слайд аудио 5',
                dscr:'Всплывающий текст слайда 5',
                sz:0,
                pth:'aud.mp3',
                prodId:2
            }, {
                id:6,
                idgal:2,
                typ:5,//Тип слайда внешнее аудио
                title:'Слайд аудио 6',
                dscr:'Всплывающий текст слайда 6',
                sz:0,
                pth:'http://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
                prodId:2
            }
        ]
    },

    //Языки
    lngs:
    {
        repeat:1,
        arr:
            [
                {   pref:'ru',  icn:'ru',   nam_en:'Russian'},
                {   pref:'en',  icn:'en',   nam_en:'English'},
                {   pref:'de',  icn:'de',   nam_en:'German'}
            ]
    },

    //Ссылки
    lnks:
    {
        repeat:1,
        arr:[
            {
                lnk:'http://google.ru',
                typ:0 //Внутренняя ссылка
            }, {
                lnk:'http://google.ru',
                typ:1 //Внешняя ссылка
            }
        ]
    },

    //Новости
    news:{
        repeat:10,
        arr:[
            {
                title:'Заголовок новости 1',
                txt:'Текст новости 1',
                attch:{
                    prodIds:[1,2,3]
                }
            }, {
                title:'Заголовок новости 2',
                txt:'Текст новости 2',
                attch:{
                    prodIds:[1,3]
                }
            }, {
                title:'Заголовок новости 3',
                txt:'Текст новости 3',
                attch:{
                    prodIds:[2,3]
                }
            }, {
                title:'Заголовок новости 4',
                txt:'Текст новости 4',
                attch:{
                    prodIds:[1,2]
                }
            }
        ]
    },

    //Заказы
    orders:{
        repeat:1,
        arr:[
            {
                id:1,
                prodId:1,
                typ:0,
                dlvr:1,
                addr:{usr:1,addr:{}},
                cntct:{usr:1,cntct:{}},
                cmnts:'Комментарии к заказу',
                // 1-в обработке
                // 2-обработан
                // 3-Инфа заказа выслана клиенту
                // 4-Оплачено частично
                // 5-Оплачено полностью
                // 6-Доставлено
                // 7-Возврат
                // 8-Отменен
                // 9-Истк срок действия
                // 100-не обработан
                stat:100,
                price:10041,
                //Тип оплаты
                //1-Картой
                //2-Paypal
                //...
                priceTyp:1,
                usr_id:1,
                dt:'2017-01-20 00:00:00',
                cnt:1
            }, {
                id:2,
                prodId:2,
                typ:0,
                dlvr:1,
                addr:{usr:1,addr:{}},
                cntct:{usr:1,cntct:{}},
                cmnts:'Комментарии к заказу',
                stat:1,
                price:10101,
                priceTyp:2,
                usr_id:2,
                dt:'2017-01-01 00:00:00',
                cnt:3
            }, {
                id:3,
                prodId:3,
                typ:0,
                dlvr:1,
                addr:{usr:1,addr:{}},
                cntct:{usr:1,cntct:{}},
                cmnts:'Комментарии к заказу',
                stat:3,
                price:10110,
                priceTyp:2,
                usr_id:2,
                dt:'2017-01-01 00:00:00',
                cnt:2
            }
        ]
    },

    //Местоположения
    places:{
        repeat:1,
        arr:[
            {
                id:1,
                nam_en: 'Москва',
                regId: 1,
                countryId: 1,
                typ: 3,//Тип местоположения 1-Страна/2-Регион/3-Город
                lat: '55.7498582',
                lon: '37.3516334'
            }, {
                id:2,
                nam_en: 'Московская область',
                regId: 1,
                countryId: 1,
                typ: 2,//Тип местоположения 1-Страна/2-Регион/3-Город
                lat: '55.7498582',
                lon: '37.3516334'
            }, {
                id:3,
                nam_en: 'Россия',
                regId: 1,
                countryId: 1,
                typ: 1,//Тип местоположения 1-Страна/2-Регион/3-Город
                lat: '55.7498582',
                lon: '37.3516334'
            }
        ]
    },

    //Диаппазоны ip адресов стран и городов
    placesIP:{
        repeat:1,
        arr:[
            {typ:3, id:1, bip:2130706433, eip:2130706433},
            {typ:3, id:2, bip:3232235777, eip:3232235777},
            {typ:2, id:3, bip:3232235778, eip:3232235778},
            {typ:1, id:4, bip:3232235779, eip:3232235779}
        ]
    },

    //Сессии
    sessions:{
        repeat:1,
        arr:[
            { sessid:'abc123',      usrid:1},
            { sessid:'abc1234',     usrid:2},
            { sessid:'abc12345',    usrid:3},
            { sessid:'abc123456',   usrid:4},
            { sessid:'abc1234567',  usrid:5}
        ]
    },

    //Настройки
    settngs:{
        repeat:1,
        arr:[
            {
                //Название магазина
                typ:1,
                txt:'Internet shop',
                vali:0,
                valf:0.01,
                vald:'2017-01-01 00:00:00',
                obj:{},
                cnstid:'shop.nam'
            }, {
                //Путь до корня магазина
                typ:1,
                txt:'/home/user1/shop',
                vali:0,
                valf:0.0,
                vald:'2017-01-01 00:00:00',
                obj:{},
                cnstid:'site.fspath'
            }, {
                //Вкл/Выкл категорий
                typ:2,
                txt:'',
                vali:1,
                valf:0.0,
                vald:'2017-01-01 00:00:00',
                obj:{},
                cnstid:'categ.on'
            }, {
                //Вкл/Выкл продуктов
                typ:2,
                txt:'',
                vali:1,
                valf:0.0,
                vald:'2017-01-01 00:00:00',
                obj:{},
                cnstid:'product.on'
            }, {
                //Вкл/Выкл все видеогалереи
                typ:2,
                txt:'',
                vali:1,
                valf:0.0,
                vald:'2017-01-01 00:00:00',
                obj:{},
                cnstid:'gals.video.on'
            }, {
                //Вкл/Выкл все фотогаллереи
                typ:2,
                txt:'',
                vali:1,
                valf:0.0,
                vald:'2017-01-01 00:00:00',
                obj:{},
                cnstid:'gals.photo.on'
            }, {
                //Вкл/Выкл все аудиогаллереи
                typ:2,
                txt:'',
                vali:1,
                valf:0.0,
                vald:'2017-01-01 00:00:00',
                obj:{},
                cnstid:'gals.audio.on'
            }, {
                //Вкл/Выкл все файловые галлереи
                typ:2,
                txt:'',
                vali:1,
                valf:0.0,
                vald:'2017-01-01 00:00:00',
                obj:{},
                cnstid:'gals.files.on'
            }, {
                //Количество колонок вывода продуктов и категорий
                typ:2,
                txt:'',
                vali:1,
                valf:0.0,
                vald:'2017-01-01 00:00:00',
                obj:{},
                cnstid:'product.colscnt'
            }, {
                //Выводить вложенные подкатегории
                typ:2,
                txt:'',
                vali:1,
                valf:0.0,
                vald:'2017-01-01 00:00:00',
                obj:{},
                cnstid:'product.show_nested_cats'
            }, {
                //Вывод картинок в списке продуктов
                typ: 2,
                txt: '',
                vali: 1,
                valf: 0.0,
                vald: '2017-01-01 00:00:00',
                obj: {},
                cnstid: 'product.img_size_num'
            }, {
                //Вкл/Выкл вывод доставки
                typ: 2,
                txt: '',
                vali: 1,
                valf: 0.0,
                vald: '2017-01-01 00:00:00',
                obj: {},
                cnstid: 'delivery.on'
            }
        ]
    },

    //Магазины с физическим расположением
    shops:{
        repeat:1,
        arr:[
            {
                nam:'Магазин на ул.Красной',
                contacts:[
                    //emails
                    {typ:0,dat:['iiiiihhaaa@mail.ru','admin@gmail.com'],cmnts:'Комментарии emails'},
                    //phones
                    {typ:1,dat:['+79031234567','+79031234568','+79031234569'],cmnts:'Комментарии phones'},
                    //faxes
                    {typ:2,dat:['+79031234567','+79031234568','+79031234569'],cmnts:'Комментарии faxes'}
                ],
                plc:{lat: '55.7498582', lon: '37.3516334'} //Местоположение на карте
            }, {
                nam:'Магазин на ул.Московской',
                contacts:[
                    //emails
                    {typ:0,dat:['iiiiihhaaa@mail.ru','admin@gmail.com'],cmnts:'Комментарии emails'},
                    //phones
                    {typ:1,dat:['+79031234567','+79031234568','+79031234569'],cmnts:'Комментарии phones'},
                    //faxes
                    {typ:2,dat:['+79031234567','+79031234568','+79031234569'],cmnts:'Комментарии faxes'}
                ],
                plc:{lat: '55.7498582', lon: '37.3516334'} //Местоположение на карте
            }, {
                nam:'Магазин на ул.Гоголя',
                contacts:[
                    //emails
                    {typ:0,dat:['iiiiihhaaa@mail.ru','admin@gmail.com'],cmnts:'Комментарии emails'},
                    //phones
                    {typ:1,dat:['+79031234567','+79031234568','+79031234569'],cmnts:'Комментарии phones'},
                    //faxes
                    {typ:2,dat:['+79031234567','+79031234568','+79031234569'],cmnts:'Комментарии faxes'}
                ],
                plc:{lat: '55.7498582', lon: '37.3516334'} //Местоположение на карте
            }
        ]
    },

    //Спецпредложения раздел
    spoffers:{
        repest:1,
        arr:[
            {
                title:'Скидка 50% на все товары с 01.01.2015 до 10.01.2015',
                dscr:'Скидка действует при покупке от 2 товаров суммарной ценой более 3000 руб',
                dt:{ fr:'2017-01-01 00:00:00', to:'2017-01-01 00:00:00' },
                //Ссылки на категории или на продукты выводятся списком
                ids:[
                    {
                        typ:1,  //Продукт
                        id:1
                    }, {
                        typ:2,  //Категория
                        id:1
                    }, {
                        typ:1,  //Продукт
                        id:2
                    }
                ]
            }
        ]
    },

    //Пользователи
    usr:{
        repeat:1,
        arr:[
            {
                //id:'1',
                fnam:'Иван',
                snam:'Иванович',
                lnam:'Иванов',
                phones:[
                    {
                        phone:'+79031234567',
                        acpt:1  //1-Подтвержден
                    }, {
                        phone:'+79031234568',
                        acpt:0  //1-Не подтвержден
                    }, {
                        phone:'+79031234569',
                        acpt:0  //1-Не подтвержден
                    }
                ],
                email:'iiiiihhaaa@mail.ru',
                password:'1234',
                nick:'Nickname',
                plc_id:1,
                plc_typ:3,
                //Адрес проживания/доставки
                addr:{
                    postcode:'123456',
                    city:'Москва',
                    region:'Московская область',
                    country:'Россия',
                    street:'ул.Красная',
                    house:'1/2',
                    doorcode:'123',
                    porch:4,
                    addtn:'',
                    cmnts:''
                },
                blkd:0,
                blkmsg:'Слишком много попыток входа в день',
                authlst:'2016-01-01 00:00:00',
                authcntblk:0,
                pubid:123
                //passwordHash:passwordHash('1234','доделать тут')
            }, {
                //id:'2',
                fnam:'Петр',
                snam:'Петрович',
                lnam:'Петров',
                phones:[
                    {
                        phone:'+79031234567',
                        acpt:1  //1-Подтвержден
                    }, {
                        phone:'+79031234568',
                        acpt:0  //1-Не подтвержден
                    }, {
                        phone:'+79031234569',
                        acpt:0  //1-Не подтвержден
                    }
                ],
                email:'admin@mail.ru',
                password:'1234',
                nick:'Nickname',
                plc_id:2,
                plc_typ:3,
                //Адрес проживания/доставки
                addr:{
                    postcode:'123456',
                    city:'Москва',
                    region:'Московская область',
                    country:'Россия',
                    street:'ул.Красная',
                    house:'1/2',
                    doorcode:'123',
                    porch:4,
                    addtn:'',
                    cmnts:''
                },
                blkd:0,
                blkmsg:'Слишком много попыток входа в день',
                authlst:'2016-01-01 00:00:00',
                authcntblk:0,
                pubid:1234
            }
        ]
    },

    //Рекламоодатели
    usrad:
    {
        repeat:1,
        arr:[
            {
                id:1,
                fnam:'Иван',
                snam:'Иванович',
                lnam:'Иванов',
                phones:[
                    {
                        phone:'+79031234567',
                        acpt:1  //1-Подтвержден
                    }, {
                        phone:'+79031234568',
                        acpt:0  //1-Не подтвержден
                    }, {
                        phone:'+79031234569',
                        acpt:0  //1-Не подтвержден
                    }
                ],
                email:'iiiiihhaaa@mail.ru',
                pass:'1234',
                nick:'Nickname',
                blkd:0,
                blkmsg:'Слишком много попыток входа в день',
                authlst:'2016-01-01 00:00:00',
                authcntblk:0
            }
        ]
    },

    //Ваучеры/Сертификаты на скидку/получение товара
    vouchers:{
        repeat:1,
        arr:[
            {
                voucher:'1234',
                dt:{ fr:'2016-01-01 00:00:00', to:'2017-01-01 00:00:00'},
                price:1010,
                idattch: {typ:1, ids:[1,2]}//Продукт
            }, {
                voucher:'12345',
                dt:{ fr:'2016-01-01 00:00:00', to:'2017-01-01 00:00:00'},
                price:2020,
                idattch: {typ:2, ids:[1,2,3]}//Категория
            }
        ]
    }
};


module.exports =
{
    fillDemo: function*(next)
    {
        let objModels=[
            Ads,
            Arch,
            Categ,
            Product,
            //CatProdSv,
            Contacts,
            CustFields,
            Delvr,
            Gals,
            Lngs,
            Lnks,
            News,
            Orders,
            Places,
            PlacesIP,
            Sessions,
            Settngs,
            Shops,
            SpOffers,
            Usr,
            UsrAd,
            Vouchers
        ];

        let objModelsData=[
            demodata.ads,
            demodata.arch,
            demodata.categ,
            demodata.product,
            //demodata.сatProdSv,
            demodata.contacts,
            demodata.custFields,
            demodata.delvr,
            demodata.gal,
            demodata.lngs,
            demodata.lnks,
            demodata.news,
            demodata.orders,
            demodata.places,
            demodata.placesIP,
            demodata.sessions,
            demodata.settngs,
            demodata.shops,
            demodata.spoffers,
            demodata.usr,
            demodata.usrad,
            demodata.vouchers
        ];


        yield mongoose.connection.dropDatabase();


        for(let k=0;k<objModels.length;k++)
        {
            let itm1=objModelsData[k];
            let mdl=objModels[k];
            for(let i=0;i<itm1.repeat;i++)
            {
                for(let j=0;j<itm1.arr.length;j++)
                {
                    let itm = new mdl(itm1.arr[j]);
                    yield itm.save();
                }
            }
        }

        //Категории маппинг родительских на _id объекта
        let categs = yield Categ.find();

        for(let j=0;j<categs.length;j++){
            for(let i=0;i<categs.length;i++){
                if(categs[j].idn==categs[i].parid_)
                {
                    categs[i].parid=categs[j]._id;
                    yield categs[i].save();
                }
            }
        }

        //Связи продукты и категории
        let products = yield Product.find();

        for(let j=0;j<categs.length;j++){
            for(let i=0,num=1;i<products.length;i++,num++) {
                if(categs[j].idn==products[i].categId)
                {
                    let catProdSv=new CatProdSv();
                    catProdSv.prodId=products[i]._id;
                    catProdSv.catId=categs[j]._id;
                    catProdSv.num=num;
                    catProdSv.newProd=1;
                    catProdSv.views=Math.floor(Math.random()*(100));//0-100
                    yield catProdSv.save();
                }
            }
        }

        this.body='Демо данные загружены успешно!';
    }
};
