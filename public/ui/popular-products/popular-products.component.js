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
var PopularProductsComponent = (function () {
    function PopularProductsComponent(productService) {
        var _this = this;
        this.productService = productService;
        this.productService.getProducts()
            .subscribe(function (products) {
            _this.products = products;
        });
    }
    return PopularProductsComponent;
}());
PopularProductsComponent = __decorate([
    core_1.Component({
        selector: 'popular-products',
        template: require('./popular-products.component.pug').toString()
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof product_service_1.ProductService !== "undefined" && product_service_1.ProductService) === "function" && _a || Object])
], PopularProductsComponent);
exports.PopularProductsComponent = PopularProductsComponent;
var _a;
