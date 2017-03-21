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
var back_btn_component_1 = require("./button/back-btn/back-btn.component");
var add_btn_component_1 = require("./button/add-btn/add-btn.component");
var core_module_1 = require("./../core/core.module");
var popular_products_component_1 = require("./popular-products/popular-products.component");
var UI_COMPONENTS = [
    back_btn_component_1.BackBtnComponent,
    add_btn_component_1.AddBtnComponent,
    popular_products_component_1.PopularProductsComponent
];
var UiModule = (function () {
    function UiModule() {
    }
    return UiModule;
}());
UiModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            core_module_1.CoreModule
        ],
        exports: UI_COMPONENTS,
        declarations: UI_COMPONENTS,
    })
], UiModule);
exports.UiModule = UiModule;
