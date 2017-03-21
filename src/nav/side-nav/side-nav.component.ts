import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { CartService } from './../../core/cart.service';
import { AuthenticationService } from './../../core/auth.service';

declare var require: any;

@Component({
    selector: 'side-nav',
    template: require('./side-nav.component.pug').toString(),
    // styleUrls: ['/side-nav.component.scss']
})

export class SideNavComponent implements OnInit{
    public cart: any = [];
    public user: any = [];
    public products: any = [];
    public orders: any = [];

    constructor(private router: Router,
                private route: ActivatedRoute,
                private http: Http,
                private cartService: CartService,
                private authService: AuthenticationService
    ) {
        this.cartService.products$
            .subscribe((products) => {
                this.products = products;
                const used = {};
            });
        this.authService.bSubject
            .subscribe((value) => {
                this.user = JSON.parse(localStorage.getItem('user'));
            });
    }
    ngOnInit() {
    }

    logout() {
        this.authService.logout();
        this.user = localStorage.removeItem('user');
    }
}
