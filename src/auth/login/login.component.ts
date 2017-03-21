import {Component, OnInit}                from '@angular/core';
import {Router, ActivatedRoute}    from '@angular/router';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { AuthenticationService } from './../../core/auth.service';
import { User } from './../../models/user';

declare var require: any;

@Component({
    selector: 'login',
    template: require('./login.component.pug').toString()
})

export class LoginComponent {
    public user: any = [];
    public loading: boolean;
    public dat: any = {
        mail: '123',
        pass: '123'
    };

    constructor(private router: Router,
                private route: ActivatedRoute,
                private http: Http,
                private aservice: AuthenticationService) {
    }

    ngOnInit() {
        this.loading = true;
    }

    login(mail: string, pass: number) {
        mail = mail.trim();
        if (!mail || !pass) {
            return;
        }
        this.dat = {
            mail: mail,
            pass: pass
        };
        this.aservice.login(this.dat)
            .then(user => {
                this.loading = false;
                if (user) {
                    this.router.navigate(['/home']);
                }
            });
    }
}
