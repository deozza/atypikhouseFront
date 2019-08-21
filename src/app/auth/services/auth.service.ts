import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import {Observable, throwError} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {Credentials} from '../../model/credentials.model';
import {Token} from '../../model/token.model';

const API_URL = environment.apiUrl;
const TOKEN_COOKIE_NAME = 'ATYPIKHOUSE.AUTH.TOKEN';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(
        private http: HttpClient
    ) { }

    public postToken(credential: Credentials): Observable<Token> {
        return this.http.post<Token>(API_URL + '/token', credential).pipe(
            tap((t)=>{
                if(this.handleToken(t))
                {
                    this.setToken(t);
                }
                else
                {
                    this.handleError;
                }
            }),
            catchError(this.handleError)
        );
    }

    private setToken(token:any) {
        localStorage.setItem(TOKEN_COOKIE_NAME, token);
    }

    public getToken(): string {
        return localStorage.getItem(TOKEN_COOKIE_NAME);
    }

    public hasToken(): boolean {
        return localStorage.getItem(TOKEN_COOKIE_NAME) != undefined;
    }

    private deleteToken() {
        localStorage.clear();
    }

    public handleToken(token: Token) {
        const parsedToken = this.parseJwt(token.token);
        return parsedToken !== undefined;
    }

    private parseJwt (token) {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));

        return JSON.parse(jsonPayload);
    };

    private handleError(error: Response | any) {
        return throwError(error);
    }

}
