'use strict';


const mongoose = require('../../modules/db').mongoose;

// Связь категорий и продуктов,
// если продукт входит не в одну категорию
let CatProdSv;

let catProdSvSchema = new mongoose.Schema({
    //Ид продукта
    prodId:{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    //prodId:Number,

    //Ид категории
    //catId:Number
    catId:{ type: mongoose.Schema.Types.ObjectId, ref: 'Categ' },

    //Порядковый номер вывода
    num:
    {
        type     : Number,
        default: 0
    },

    //Дата/Время добавления
    dt:
    {
        type     : Date,
        default: Date.now
    },

    //Признак нового продукта
    newProd:Number,

    //Количество просмотров
    views:Number
});

try
{
    if (mongoose.model('CatProdSv'))
        CatProdSv = mongoose.model('CatProdSv');
}
catch(e)
{
    if (e.name === 'MissingSchemaError')
        CatProdSv = mongoose.model('CatProdSv', catProdSvSchema);
}
module.exports = CatProdSv;


