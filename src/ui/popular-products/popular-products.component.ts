import { Component } from '@angular/core';

import { Product } from './../../models/product';
import { ProductService } from './../../core/product.service';

declare var require: any;

@Component({
    selector: 'popular-products',
    template: require('./popular-products.component.pug').toString()
})

export class PopularProductsComponent {
    products: Product[];
    product: Product;
    numbernews: any;

    constructor(private productService: ProductService) {
        this.productService.getProducts()
            .subscribe(products => {
                this.products = products;
                this.numbernews = this.products.sort(function(obj1, obj2) {
					return obj2.num-obj1.num;
				});
				console.log(this.numbernews)
            });
    }
}
