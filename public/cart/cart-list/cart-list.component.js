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
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
var _ = require("lodash");
var common_1 = require("@angular/common");
var cart_service_1 = require("./../../core/cart.service");
var CartListComponent = (function () {
    function CartListComponent(router, route, http, cartService, location) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.http = http;
        this.cartService = cartService;
        this.location = location;
        this.products = [];
        this.product = [];
        this.orders = [];
        this.count = 1;
        this.cartData = [];
        this.cartService.products$
            .subscribe(function (products) {
            _this.updateData();
            _this.cartData = products;
        });
    }
    CartListComponent.prototype.getById = function (id) {
        return _.find(this.cartData, { id: id });
    };
    CartListComponent.prototype.updateData = function () {
        if (this.cartData = null)
            this.cartData = [];
        this.cartData = JSON.parse(localStorage.getItem('cartItems')) || [];
        return this.cartData;
    };
    CartListComponent.prototype.remove = function (id) {
        this.updateData();
        this.cartData = _.reject(this.cartData, function (item) {
            return item.id === id;
        });
        this.cartService.addItem(this.cartData);
        return this.cartData;
    };
    CartListComponent.prototype.toogleAddCount = function (product) {
        this.product = product;
        this.updateData();
        this.item = this.getById(this.product.id);
        if (this.item) {
            this.item.count = this.item.count + 1;
            if (this.item.count < 1) {
                this.remove(this.product.id);
            }
            this.cartService.addItem(this.cartData);
        }
    };
    CartListComponent.prototype.toogleRemoveCount = function (product) {
        this.product = product;
        this.updateData();
        this.item = this.getById(this.product.id);
        if (this.item) {
            this.item.count = this.item.count - 1;
            if (this.item.count < 1) {
                this.remove(this.product.id);
            }
            this.cartService.addItem(this.cartData);
        }
    };
    CartListComponent.prototype.deleteProduct = function (product) {
        this.cartService.deleteProduct(product);
    };
    CartListComponent.prototype.removeItem = function (product) {
        this.cartService.removeItem();
        this.products = localStorage.removeItem('cartItems');
    };
    CartListComponent.prototype.back = function () {
        this.location.back();
    };
    return CartListComponent;
}());
CartListComponent = __decorate([
    core_1.Component({
        selector: 'cart-list',
        template: require('./cart-list.component.pug').toString()
    }),
    __metadata("design:paramtypes", [router_1.Router,
        router_1.ActivatedRoute,
        http_1.Http,
        cart_service_1.CartService,
        common_1.Location])
], CartListComponent);
exports.CartListComponent = CartListComponent;
