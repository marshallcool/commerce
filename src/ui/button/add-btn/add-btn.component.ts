import { Component } from '@angular/core';

import { Product } from './../../../models/product';
import { CartService } from './../../../core/cart.service';

declare var require: any;

@Component({
    selector: 'add-btn',
    template: require('./add-btn.component.pug').toString()
})
export class AddBtnComponent {
    product: Product;
    constructor(private cartService: CartService) { }

    addToCart(product:Product) {
		this.product = product;
		this.cartService.addItem(this.product);
	}
}