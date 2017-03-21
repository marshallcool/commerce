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
var loader_service_1 = require("../loader.service");
var rxjs_1 = require("rxjs");
var LoaderBarComponent = (function () {
    function LoaderBarComponent(loader) {
        this.loader = loader;
        this.loadTrigger = new rxjs_1.BehaviorSubject('none');
        this.subs = [];
    }
    LoaderBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subs.push(this.loader.starts.subscribe(function (key) {
            _this.triggerKey = key;
            if (_this.loadTrigger.value !== 'start' && _this.loadTrigger.value !== 'in-progress') {
                _this.loadTrigger.next('start');
                setTimeout(function () {
                    if (_this.loadTrigger.value == 'start') {
                        _this.loadTrigger.next('in-progress');
                    }
                }, 50);
            }
        }));
        this.subs.push(this.loader.ends.subscribe(function (key) {
            if (_this.triggerKey === key) {
                _this.loadTrigger.next('end');
                setTimeout(function () {
                    _this.loadTrigger.next('none');
                }, 150);
            }
        }));
    };
    LoaderBarComponent.prototype.ngOnDestroy = function () {
        this.subs.forEach(function (sub) { return sub.unsubscribe(); });
    };
    return LoaderBarComponent;
}());
LoaderBarComponent = __decorate([
    core_1.Component({
        selector: 'loader-bar',
        template: require('./loader-bar.component.pug').toString(),
        animations: [
            core_1.trigger('load', [
                core_1.state('none', core_1.style({
                    transform: 'translateX(-100%)',
                    opacity: 0,
                })),
                core_1.state('start', core_1.style({
                    transform: 'translateX(-100%)',
                    opacity: 1,
                })),
                core_1.state('in-progress', core_1.style({
                    transform: 'translateX(0)',
                    opacity: 1,
                })),
                core_1.state('end', core_1.style({
                    transform: 'translateX(0)',
                    opacity: 1,
                })),
                core_1.transition('start => in-progress', core_1.animate('50000ms cubic-bezier(0,1.13,.32,.91)')),
                core_1.transition('* => end', core_1.animate('250ms ease-in')),
                core_1.transition('end => none', core_1.animate('100ms ease-in')),
            ]),
        ],
    }),
    __metadata("design:paramtypes", [loader_service_1.LoaderService])
], LoaderBarComponent);
exports.LoaderBarComponent = LoaderBarComponent;
