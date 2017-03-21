import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { BehaviorSubject } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import * as _ from "lodash";

import { Product } from './../models/product';

@Injectable()
export class CartService {

    private shippingUrl = 'http://127.0.0.1:9000/api/delivery/getall';
    private headers = new Headers({ 'Content-type': 'application/json' });

    public cart:any = [];
    public bSubject = new BehaviorSubject(false);
    public orders:any = [];
    public product: any = [];
    public products$ = new BehaviorSubject([]);
    public mail$ = new BehaviorSubject([]);
    private LOCAL_STORAGE_KEY = 'cartItems';
    public products: Product[] = [];
    public mail: any;

    constructor(private http: Http) {
        const products = JSON.parse(localStorage.getItem(this.LOCAL_STORAGE_KEY)) || [];
        const mail = JSON.parse(localStorage.getItem('shipping')) || [];
        this.setShipping(mail);
        this.setProducts(products);
    }

    getShipping() {
        return this.http.get(this.shippingUrl)
            .map(res => res.json());
    }

    private setShipping(mail:any) {
        this.mail = mail;
        this.mail$.next(mail);
        localStorage.setItem('shipping', JSON.stringify(this.mail));
    }

    private setProducts(products: Product[]) {
        this.products = products;
        this.products$.next(products);
        localStorage.setItem(this.LOCAL_STORAGE_KEY, JSON.stringify(this.products));
    }

    public deleteProduct(product: Product) {
        const products = _.filter(this.products, p => p.id !== product.id);
        this.setProducts(products);
    }

    addShipping(mail:any) {
        this.setShipping(mail);
        this.mail$.next(mail);
    }

    addItem(product:any){
        this.setProducts(product);
        this.products$.next(product)
    }

    removeItem() {
        this.products = [];
        this.setProducts(this.products);
    }

}