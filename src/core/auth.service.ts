import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {BehaviorSubject} from 'rxjs/Rx';

import { User } from './../models/user';

@Injectable()
export class AuthenticationService {
    private headers = new Headers({'Content-Type': 'application/json'});
    private options = new RequestOptions({headers: this.headers});
    public bSubject = new BehaviorSubject(false);
    public user: any = [];
    public newUser: any = [];

    constructor(private http: Http) {
    }

    private handleError(error: any): Promise<any> {
        console.log(error);
        return Promise.reject(error.message || error);
    }

    login(dat: any = []) {
        return this.http.post('http://127.0.0.1:9000/api/users', {dat}, {headers: this.headers})
            .toPromise()
            .then(res => {
                this.user = res.json();
                for (let key in this.user) {
                    localStorage.setItem('user', JSON.stringify(this.user));
                    this.bSubject.next(true);
                    return true;
                }
                return false;
            })
            .catch(this.handleError);
    }

    signup(user: User) {
        return this.http.post('http://127.0.0.1:9000/api/users/signup', user, { headers: this.headers })
            .map((response: Response) => response.json());
    }

    logout() {
        this.user = [];
    }
}