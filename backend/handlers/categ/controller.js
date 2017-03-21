'use strict';


const mongoose    = require('../../modules/db').mongoose;

//DB-Models
const Categ     = require('../../db-modules/categ');
const Product   =require('../../db-modules/product');
const CatProdSv =require('../../db-modules/catprodsv');

module.exports =
{
    params:
    {
        categById: function*(id, next)
        {
            this.params.categId=id;
            yield* next;
        }
    },


    //Получение всех категорий
    getCategs: function*(next)
    {
        let categs=yield Categ.find()
          .sort({'lk':1,'lev':1});
        this.body=categs;
    },


    //Получение одной категории
    getCategById: function*(next)
    {
        let categ=yield Categ.find()
          .where({id: this.params.categId});
        this.body=categ;
    },


    //Получение дочешних категорий 1го уровня
    getCategChildren: function*(next)
    {
        let categs=yield Categ.find()
          .where({parId: this.params.categId})
          .sort({'lev':1});
        this.body=categs;
    },

    
    //Получение продуктов выбраннной категории
    getProductsOfCateg:function*(next)
    {
        let products = yield CatProdSv.find()
            .populate('prodId')
            .where({catId: this.params.categId});
        this.body=products;
    },


    //Получение продуктов и категорий по id категории
    getProducts: function*(next)
    {
        let categId=this.params.categId;
        if(categId==-1) categId=null;
        //Получение продуктов
        let products = yield CatProdSv.find()
            .populate('prodId')
            .where({catId: this.params.categId});
        this.body=products;
    },

};
