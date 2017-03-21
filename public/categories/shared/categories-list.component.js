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
var category_service_1 = require("./../../core/category.service");
var CategoriesListComponent = (function () {
    function CategoriesListComponent(categoryService) {
        var _this = this;
        this.categoryService = categoryService;
        this.roomState = "active";
        this.categoryService.getCategories()
            .subscribe(function (categories) {
            _this.categories = categories;
        });
    }
    CategoriesListComponent.prototype.ngOnInit = function () {
    };
    return CategoriesListComponent;
}());
CategoriesListComponent = __decorate([
    core_1.Component({
        selector: 'categories-list',
        template: require('./categories-list.component.pug').toString(),
        animations: [
            core_1.trigger('side', [
                core_1.state('inactive', core_1.style({
                    transform: 'translateX(-100%)',
                    display: 'block'
                })),
                core_1.state('active', core_1.style({
                    transform: 'translateX(0)',
                    display: 'block'
                })),
                core_1.transition('void => active', [
                    core_1.animate(700, core_1.keyframes([
                        core_1.style({ display: 'block', opacity: 0, transform: 'translateX(-100%)', offset: 0 }),
                        core_1.style({ display: 'block', opacity: 1, transform: 'translateX(0)', offset: 1.0 })
                    ]))
                ]),
                core_1.transition('active => inactive', core_1.animate('200ms ease-out'))
            ])
        ]
    }),
    __metadata("design:paramtypes", [category_service_1.CategoryService])
], CategoriesListComponent);
exports.CategoriesListComponent = CategoriesListComponent;
