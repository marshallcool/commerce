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
var cart_service_1 = require("./../../core/cart.service");
var auth_service_1 = require("./../../core/auth.service");
var SideNavComponent = (function () {
    function SideNavComponent(router, route, http, cartService, authService) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.http = http;
        this.cartService = cartService;
        this.authService = authService;
        this.cart = [];
        this.user = [];
        this.products = [];
        this.orders = [];
        this.cartService.products$
            .subscribe(function (products) {
            _this.products = products;
            var used = {};
        });
        this.authService.bSubject
            .subscribe(function (value) {
            _this.user = JSON.parse(localStorage.getItem('user'));
        });
    }
    SideNavComponent.prototype.ngOnInit = function () {
    };
    SideNavComponent.prototype.logout = function () {
        this.authService.logout();
        this.user = localStorage.removeItem('user');
    };
    return SideNavComponent;
}());
SideNavComponent = __decorate([
    core_1.Component({
        selector: 'side-nav',
        template: require('./side-nav.component.pug').toString(),
    }),
    __metadata("design:paramtypes", [router_1.Router,
        router_1.ActivatedRoute,
        http_1.Http,
        cart_service_1.CartService,
        auth_service_1.AuthenticationService])
], SideNavComponent);
exports.SideNavComponent = SideNavComponent;
