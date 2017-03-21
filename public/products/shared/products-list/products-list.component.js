"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var product_service_1 = require("./../../../core/product.service");
var cart_service_1 = require("./../../../core/cart.service");
var _ = require("lodash");
var ProductsListComponent = (function () {
    function ProductsListComponent(productService, cartService) {
        var _this = this;
        this.productService = productService;
        this.cartService = cartService;
        this.cart = [];
        this.carts = [];
        this.a = 1;
        this.addProductLoading = false;
        this.productService.getProducts()
            .subscribe(function (products) {
            _this.products = products;
        });
        this.cartService.products$
            .subscribe(function (products) {
            _this.cart = products;
            if (_this.cart == null) {
                _this.cart = [];
            }
        });
    }
    ProductsListComponent.prototype.getById = function (id) {
        return _.find(this.cartData, { id: id });
    };
    ProductsListComponent.prototype.updateData = function () {
        this.cartData = JSON.parse(localStorage.getItem('cartItems')) || [];
        return this.cartData;
    };
    ProductsListComponent.prototype.addToCart = function (product) {
        var _this = this;
        this.addProductLoading = true;
        setTimeout(function () {
            _this.addProductLoading = false;
        }, 3500);
        this.product = product;
        this.product.count = 1;
        this.updateData();
        this.oldItem = this.getById(this.product.id);
        if (!this.oldItem) {
            this.cartData.push(this.product);
        }
        else {
            this.oldItem.count = this.oldItem.count + this.product.count;
        }
        this.cartService.addItem(this.cartData);
        return this.product;
    };
    return ProductsListComponent;
}());
ProductsListComponent = __decorate([
    core_1.Component({
        selector: 'products-list',
        template: require('./products-list.component.pug').toString()
    }),
    __metadata("design:paramtypes", [product_service_1.ProductService,
        cart_service_1.CartService])
], ProductsListComponent);
exports.ProductsListComponent = ProductsListComponent;
