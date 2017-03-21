import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

import * as _ from "lodash";

import { CartService } from './../../core/cart.service';
import { Product } from './../../models/product';
import { CategoryService } from './../../core/category.service';

declare var require: any;


@Component({
    selector: 'category-page',
    template: require('./category-page.component.pug').toString()
})

export class CategoryPageComponent {
    public products: any;
    public cart: any;
    public carts: any = [];
    product: Product;
    public cartData: any;
    public oldItem: any;

    constructor(private categoryService: CategoryService,
        private route: ActivatedRoute,
        private router: Router,
        private cartService: CartService) {
            
        this.cartService.products$
            .subscribe((products) => {
                this.cart = products;
                if (this.cart == null) {
                    this.cart = [];
                }
            });
    }

    ngOnInit() {
        this.route.params
            .map(params => params['id'])
            .switchMap(id => this.categoryService.getCategory(id))
            .subscribe(products => this.products = products);
    }

    getById(id: any) {
        return _.find(this.cartData, { id: id });
    }

    updateData() {
        this.cartData = JSON.parse(localStorage.getItem('cartItems')) || [];
        return this.cartData;
    }

    addToCart(product: Product) {
        this.product = product;
        this.product.prodId.count = 1;
        this.updateData();
        this.oldItem = this.getById(this.product.prodId.id);
        if (!this.oldItem) {
            this.cartData.push(this.product.prodId);
        } else {
            this.oldItem.count = this.oldItem.count + this.product.prodId.count;
        }
        this.cartService.addItem(this.cartData);
        return this.product.prodId;
    }
}