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
var auth_service_1 = require("./../../core/auth.service");
var RegistrationComponent = (function () {
    function RegistrationComponent(router, aService) {
        this.router = router;
        this.aService = aService;
        this.model = {};
        this.loading = false;
        this.errorMail = false;
    }
    RegistrationComponent.prototype.register = function () {
        var _this = this;
        this.errorMail = false;
        if (this.model.pass == this.model.pass2) {
            this.loading = false;
            this.aService.signup(this.model)
                .subscribe(function (data) {
                if (data.errMsg === 'Такой e-mail уже занят')
                    _this.errorMail = true;
                if (data.success)
                    _this.router.navigate(['/login']);
            }, function (error) {
            });
        }
        else {
            this.loading = true;
        }
    };
    return RegistrationComponent;
}());
RegistrationComponent = __decorate([
    core_1.Component({
        selector: 'registration',
        template: require('./registration.component.pug').toString()
    }),
    __metadata("design:paramtypes", [router_1.Router,
        auth_service_1.AuthenticationService])
], RegistrationComponent);
exports.RegistrationComponent = RegistrationComponent;
