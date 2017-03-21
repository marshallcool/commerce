"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var primeng_1 = require("primeng/primeng");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var products_list_component_1 = require("./../products/shared/products-list/products-list.component");
var categories_list_component_1 = require("./../categories/shared/categories-list.component");
var ui_module_1 = require("./../ui/ui.module");
var core_module_1 = require("./../core/core.module");
var SHARED_COMPONENTS = [
    products_list_component_1.ProductsListComponent,
    categories_list_component_1.CategoriesListComponent
];
var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            router_1.RouterModule,
            ui_module_1.UiModule,
            core_module_1.CoreModule,
            primeng_1.CarouselModule,
            ng_bootstrap_1.NgbModule.forRoot()
        ],
        exports: SHARED_COMPONENTS,
        declarations: SHARED_COMPONENTS,
        providers: []
    })
], SharedModule);
exports.SharedModule = SharedModule;
