import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { Product } from './../../models/product';
import { ProductService } from './../../core/product.service';

declare var require:any;

@Component({
    selector: 'product-page',
    template: require('./product-page.component.pug').toString()
})

export class ProductPageComponent {
    @Input()
    product: Product;

    constructor(private productService: ProductService,
                private route: ActivatedRoute,
                private router: Router) {
    }

    ngOnInit() {
        this.route.params.switchMap(params => {
            const productUrl = params['id'];
            return this.productService.getProduct(productUrl);
        })
            .subscribe(product => this.product = product);
    }
}
