import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Product } from './../models/product';

@Injectable()
export class ProductService {

    private productUrl = 'http://127.0.0.1:9000/api/products';
    private headers = new Headers({ 'Content-type': 'application/json' });
    public cart:any = [];
    product: Product;

    constructor(private http: Http) {}

    getProducts() {
        return this.http.get(this.productUrl)
            .map(res => res.json());
    }

    getProduct(id: number) {
        const url = `${this.productUrl}/${id}`;
        return this.http.get(url)
            .map(res => res.json());
    }
}