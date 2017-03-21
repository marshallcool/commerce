'use strict';


const mongoose    = require('../../modules/db').mongoose;

//DB-Models
const Product   =require('../../db-modules/product');

module.exports =
{

    params: {

        productById: function*(id, next) {
            this.params.productId=id;
            yield* next;
        }

    },

    //Получение списка продуктов
    getProducts: function*(next)
    {
        let products=yield Product.find();
        this.body=products;
    },


    //Получение одного продукта
    getOneProduct: function*(next)
    {
        let product=yield Product.findOne({id:this.params.productId});
        this.body=product;
    }
};
