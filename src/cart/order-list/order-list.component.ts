import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import * as _ from "lodash";
import { Location } from '@angular/common';

import { CartService } from './../../core/cart.service';
import { Product } from './../../models/product';

declare var require: any;

@Component({
    selector: 'order-list',
    template: require('./order-list.component.pug').toString()
})

export class OrdertListComponent {
    public products: any = [];
    public product: any = [];
    public cartData: any;
    public mail:any;
    public mailData: any = [];
    public model:any;

    constructor(private router: Router,
        private route: ActivatedRoute,
        private http: Http,
        private cartService: CartService,
        private location: Location
    ) {
        this.cartService.getShipping()
            .subscribe(model => {
                this.model = model;
                console.log(this.model)
            });
        this.cartService.products$
            .subscribe((products) => {
                this.updateData();
                this.cartData = products;
            });
        this.cartService.mail$
            .subscribe((mail) => {
                this.updateData();
                this.mailData = mail;
                if (this.mailData.length) {
                    for (let i = 0; this.model.length > i; i++) {
                        if (this.mailData[0].id === this.model[i].id) {
                            this.model[i].loading = true;
                        }
                    }
                }
            });
    }

    updateData() {
        if (this.mailData = null) this.mailData = [];
        this.mailData = JSON.parse(localStorage.getItem('shipping')) || [];
        return this.mailData;
    }

    toogleMail(mod:any) {
        this.updateData();
        for (let i = 0; this.model.length > i; i++) {
            this.model[i].loading = false;
        }
        if (mod.loading === false) {
            mod.loading = true;
        } else {
            mod.loading = false;
        }
        this.mailData = [];
        this.mailData.push(mod);
        // this.cartService.addShipping(this.mailData);
        return mod;
    }

    back() {
        this.location.back();
    }
}
