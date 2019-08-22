import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import {Observable, throwError} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {User} from '../../model/user.model';
import {List} from '../../model/list.model';

const API_URL = environment.apiUrl;

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(
        private http: HttpClient
    ) { }

    public getUsers(): Observable<List<User>> {
      return this.http.get<List<User>>(API_URL + '/users');
    }

    public getUser(uuid:string): Observable<User> {
      return this.http.get<User>(API_URL + '/user/'+uuid);
    }

    public getUserCurrent(): Observable<User> {
      return this.http.get<User>(API_URL + '/user/current');
    }

    public postUser(user:User): Observable<User> {
      return this.http.post<User>(API_URL + '/user', user);
    }

    public patchUserCurrent(user:User): Observable<User> {
      return this.http.patch<User>(API_URL + '/user', user);
    }

    public patchUserActivate(token:string): Observable<User> {
      return this.http.patch<User>(API_URL + '/user/activate', token);
    }

    public patchUserCurrent(user:User): Observable<User> {
      return this.http.patch<User>(API_URL + '/user/current', user);
    }

    public patchUserSpecific(uuid:string, user:User): Observable<User> {
      return this.http.patch<User>(API_URL + '/user' +uuid, user);
    }
}
