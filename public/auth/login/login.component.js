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
require("rxjs/add/operator/toPromise");
var auth_service_1 = require("./../../core/auth.service");
var LoginComponent = (function () {
    function LoginComponent(router, route, http, aservice) {
        this.router = router;
        this.route = route;
        this.http = http;
        this.aservice = aservice;
        this.user = [];
        this.dat = {
            mail: '123',
            pass: '123'
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loading = true;
    };
    LoginComponent.prototype.login = function (mail, pass) {
        var _this = this;
        mail = mail.trim();
        if (!mail || !pass) {
            return;
        }
        this.dat = {
            mail: mail,
            pass: pass
        };
        this.aservice.login(this.dat)
            .then(function (user) {
            _this.loading = false;
            if (user) {
                _this.router.navigate(['/home']);
            }
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: 'login',
        template: require('./login.component.pug').toString()
    }),
    __metadata("design:paramtypes", [router_1.Router,
        router_1.ActivatedRoute,
        http_1.Http,
        auth_service_1.AuthenticationService])
], LoginComponent);
exports.LoginComponent = LoginComponent;
