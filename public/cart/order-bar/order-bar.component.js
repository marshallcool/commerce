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
var cart_service_1 = require("./../../core/cart.service");
var OrderBarComponent = (function () {
    function OrderBarComponent(router, route, http, cartService) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.http = http;
        this.cartService = cartService;
        this.products = [];
        this.price = 0;
        this.offrs = 0;
        this.product = [];
        this.orders = [];
        this.count = 1;
        this.cartService.mail$
            .subscribe(function (mail) {
            _this.updateData();
            _this.mailData = mail;
            if (_this.mailData.length) {
                _this.totalPrice = _this.price - _this.offrs - _this.mailData[0].price;
            }
            else {
                _this.totalPrice = _this.price - _this.offrs;
            }
        });
        this.cartService.products$
            .subscribe(function (products) {
            _this.price = 0;
            _this.offrs = 0;
            _this.totalPrice = 0;
            _this.updateData();
            _this.cartData = products;
            var used = {};
            for (var i = 0; _this.cartData.length > i; i++) {
                if (_this.cartData[i].offrs[i] !== undefined) {
                    var offrs = _this.cartData[i].offrs[i].price;
                    _this.offrs = offrs;
                }
            }
            _.forOwn(_this.cartData, function (product) { return _this.price += ((product.count || product.prodId.count) * product.price); });
            if (_this.mailData.length) {
                _this.totalPrice = _this.price - _this.offrs - _this.mailData[0].price;
            }
            else {
                _this.totalPrice = _this.price - _this.offrs;
            }
        });
    }
    OrderBarComponent.prototype.updateData = function () {
        this.cartData = JSON.parse(localStorage.getItem('cartItems')) || [];
        this.mailData = JSON.parse(localStorage.getItem('shipping')) || [];
        return this.cartData & this.mailData;
    };
    OrderBarComponent.prototype.buyItem = function () {
        this.router.navigate(['cart/shipping']);
    };
    return OrderBarComponent;
}());
OrderBarComponent = __decorate([
    core_1.Component({
        selector: 'order-bar',
        template: require('./order-bar.component.pug').toString()
    }),
    __metadata("design:paramtypes", [router_1.Router,
        router_1.ActivatedRoute,
        http_1.Http,
        cart_service_1.CartService])
], OrderBarComponent);
exports.OrderBarComponent = OrderBarComponent;
