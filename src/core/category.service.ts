import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Category } from './../models/category';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CategoryService {

    private categoriesUrl = 'http://127.0.0.1:9000/api/categ/all';
    private categoryUrl = 'http://127.0.0.1:9000/api/categ/products-of-cat';
    private headers = new Headers({ 'Content-type': 'application/json' });
    category: Category;

    constructor(private http: Http) {}

    getCategories() {
        return this.http.get(this.categoriesUrl)
            .map(res => res.json());
    }

    getCategory(id: number) {
        const url = `${this.categoryUrl}/${id}`;
        return this.http.get(url)
            .map(res => res.json());
    }
}