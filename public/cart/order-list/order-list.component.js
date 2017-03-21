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
var common_1 = require("@angular/common");
var cart_service_1 = require("./../../core/cart.service");
var OrdertListComponent = (function () {
    function OrdertListComponent(router, route, http, cartService, location) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.http = http;
        this.cartService = cartService;
        this.location = location;
        this.products = [];
        this.product = [];
        this.mailData = [];
        this.cartService.getShipping()
            .subscribe(function (model) {
            _this.model = model;
            console.log(_this.model);
        });
        this.cartService.products$
            .subscribe(function (products) {
            _this.updateData();
            _this.cartData = products;
        });
        this.cartService.mail$
            .subscribe(function (mail) {
            _this.updateData();
            _this.mailData = mail;
            if (_this.mailData.length) {
                for (var i = 0; _this.model.length > i; i++) {
                    if (_this.mailData[0].id === _this.model[i].id) {
                        _this.model[i].loading = true;
                    }
                }
            }
        });
    }
    OrdertListComponent.prototype.updateData = function () {
        if (this.mailData = null)
            this.mailData = [];
        this.mailData = JSON.parse(localStorage.getItem('shipping')) || [];
        return this.mailData;
    };
    OrdertListComponent.prototype.toogleMail = function (mod) {
        this.updateData();
        for (var i = 0; this.model.length > i; i++) {
            this.model[i].loading = false;
        }
        if (mod.loading === false) {
            mod.loading = true;
        }
        else {
            mod.loading = false;
        }
        this.mailData = [];
        this.mailData.push(mod);
        return mod;
    };
    OrdertListComponent.prototype.back = function () {
        this.location.back();
    };
    return OrdertListComponent;
}());
OrdertListComponent = __decorate([
    core_1.Component({
        selector: 'order-list',
        template: require('./order-list.component.pug').toString()
    }),
    __metadata("design:paramtypes", [router_1.Router,
        router_1.ActivatedRoute,
        http_1.Http,
        cart_service_1.CartService,
        common_1.Location])
], OrdertListComponent);
exports.OrdertListComponent = OrdertListComponent;
