import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from './../../core/auth.service';

declare var require:any;

@Component({
	selector: 'registration',
    template:require('./registration.component.pug').toString()
})

export class RegistrationComponent {
	model: any = {};
	loading = false;
    errorMail = false;

	constructor(
		private router: Router,
        private aService: AuthenticationService
	) {}


    private register() {
        this.errorMail = false;
        if (this.model.pass == this.model.pass2) {
            this.loading = false;
            this.aService.signup(this.model)
                .subscribe(
                    data => {
                        if (data.errMsg === 'Такой e-mail уже занят')
                            this.errorMail = true;
                        if (data.success)
                            this.router.navigate(['/login']);
                    },
                    error => {

                    });
        } else {
            this.loading = true;
        }
    }
}
