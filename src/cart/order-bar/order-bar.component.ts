import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import * as _ from "lodash";

import { CartService } from './../../core/cart.service';
import { Product } from './../../models/product';

declare var require: any;

@Component({
    selector: 'order-bar',
    template: require('./order-bar.component.pug').toString()
})

export class OrderBarComponent {
    public products: any = [];
    public price: number = 0;
    public offrs: number = 0;
    public product: any = [];
    public orders: any = [];
    public count: number = 1;
    public item: any;
    public cartData: any;
    public mailData:any;
    public totalPrice:number;

    constructor(private router: Router,
        private route: ActivatedRoute,
        private http: Http,
        private cartService: CartService
    ) {
        this.cartService.mail$
            .subscribe((mail) => {
                this.updateData();
                this.mailData = mail;
                if (this.mailData.length) {
                    this.totalPrice = this.price - this.offrs - this.mailData[0].price;
                } else {
                    this.totalPrice = this.price - this.offrs;
                }
            })
        this.cartService.products$
            .subscribe((products) => {
                this.price = 0;
                this.offrs = 0;
                this.totalPrice = 0;
                this.updateData();
                this.cartData = products;
                const used = {};
                for (let i = 0; this.cartData.length > i; i++) {
                    if (this.cartData[i].offrs[i] !== undefined) {
                        const offrs = this.cartData[i].offrs[i].price;
                        this.offrs = offrs;
                    }
                }
                _.forOwn(this.cartData, (product) => this.price += ((product.count || product.prodId.count) * product.price));
                if (this.mailData.length) {
                    this.totalPrice = this.price - this.offrs - this.mailData[0].price;
                } else {
                    this.totalPrice = this.price - this.offrs;
                }
            });
    }

    updateData() {
        this.cartData = JSON.parse(localStorage.getItem('cartItems')) || [];
        this.mailData = JSON.parse(localStorage.getItem('shipping')) || [];
        return this.cartData & this.mailData;
    }

    buyItem() {
        this.router.navigate(['cart/shipping']);
    }
}
