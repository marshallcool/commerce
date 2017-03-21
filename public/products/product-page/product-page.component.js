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
require("rxjs/add/operator/switchMap");
var product_1 = require("./../../models/product");
var product_service_1 = require("./../../core/product.service");
var ProductPageComponent = (function () {
    function ProductPageComponent(productService, route, router) {
        this.productService = productService;
        this.route = route;
        this.router = router;
    }
    ProductPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.switchMap(function (params) {
            var productUrl = params['id'];
            return _this.productService.getProduct(productUrl);
        })
            .subscribe(function (product) { return _this.product = product; });
    };
    return ProductPageComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", product_1.Product)
], ProductPageComponent.prototype, "product", void 0);
ProductPageComponent = __decorate([
    core_1.Component({
        selector: 'product-page',
        template: require('./product-page.component.pug').toString()
    }),
    __metadata("design:paramtypes", [product_service_1.ProductService,
        router_1.ActivatedRoute,
        router_1.Router])
], ProductPageComponent);
exports.ProductPageComponent = ProductPageComponent;
