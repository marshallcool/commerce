import { Component } from '@angular/core';

import { Product } from './../../../models/product';
import { ProductService } from './../../../core/product.service';
import { CartService } from './../../../core/cart.service';

import * as _ from "lodash";

declare var require: any;

@Component({
    selector: 'products-list',
    template: require('./products-list.component.pug').toString()
})

export class ProductsListComponent {
    products: Product[];
    product: Product;
    public cart: any = [];
    public carts: any = [];
    public a: any = 1;
    public _id: any;
    public oldItem: any;
    public cartData: any;
    public addProductLoading: boolean;

    constructor(private productService: ProductService,
        private cartService: CartService) {
        this.addProductLoading = false;
        this.productService.getProducts()
            .subscribe(products => this.products = products );
        this.cartService.products$
            .subscribe((products) => {
                this.cart = products;
                if (this.cart == null) {
                    this.cart = [];
                }
            });
    }

    getById(id: any) {
        return _.find(this.cartData, { id: id });
    }

    updateData() {
        this.cartData = JSON.parse(localStorage.getItem('cartItems')) || [];
        return this.cartData;
    }

    addToCart(product: Product) {
        this.addProductLoading = true;
        setTimeout(() => {
            this.addProductLoading = false;
        }, 3500)
        this.product = product;
        this.product.count = 1;
        this.updateData();
        this.oldItem = this.getById(this.product.id);
        if (!this.oldItem) {
            this.cartData.push(this.product);
        } else {
            this.oldItem.count = this.oldItem.count + this.product.count;
        }
        this.cartService.addItem(this.cartData);
        return this.product;
    }
}
