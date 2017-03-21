import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import * as _ from "lodash";
import { Location } from '@angular/common';

import { CartService } from './../../core/cart.service';
import { Product } from './../../models/product';

declare var require: any;

@Component({
    selector: 'cart-list',
    template: require('./cart-list.component.pug').toString(),
    styleUrls: ['./cart-list.component.scss']
})

export class CartListComponent {
    public products: any = [];
    public product: any = [];
    public orders: any = [];
    public count: number = 1;
    public item: any;
    public cartData: any = [];

    constructor(private router: Router,
        private route: ActivatedRoute,
        private http: Http,
        private cartService: CartService,
        private location: Location
    ) {
        this.cartService.products$
            .subscribe((products) => {
                this.updateData();
                this.cartData = products;
            });
    }

    getById(id: any) {
        return _.find(this.cartData, { id: id });
    }

    updateData() {
        if (this.cartData = null) this.cartData = [];
        this.cartData = JSON.parse(localStorage.getItem('cartItems')) || [];
        return this.cartData;
    }

    remove(id: any) {
        this.updateData();
        this.cartData = _.reject(this.cartData, function (item: any) {
            return item.id === id;
        });
        this.cartService.addItem(this.cartData);
        return this.cartData;
    }

    toogleAddCount(product: any) {
        this.product = product;
        this.updateData();
        this.item = this.getById(this.product.id);
        if (this.item) {
            this.item.count = this.item.count + 1;
            if (this.item.count < 1) {
                this.remove(this.product.id);
            }
            this.cartService.addItem(this.cartData);
        }
    }

    toogleRemoveCount(product: any) {
        this.product = product;
        this.updateData();
        this.item = this.getById(this.product.id);
        if (this.item) {
            this.item.count = this.item.count - 1;
            if (this.item.count < 1) {
                this.remove(this.product.id);
            }
            this.cartService.addItem(this.cartData);
        }
    }

    deleteProduct(product: any) {
        this.cartService.deleteProduct(product);
    }

    removeItem(product: any) {
        this.cartService.removeItem();
        this.products = localStorage.removeItem('cartItems');
    }

    back() {
        this.location.back();
    }
}