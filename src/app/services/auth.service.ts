import { Injectable } from '@angular/core';
import { Router } from '@angular/router'
import { HttpClient, HttpHeaders, HttpParams, HttpRequest, HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';




@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public token: string;
  error: string;
  registerUrl = 'http://localhost:8000/api/token';

  constructor(private http: HttpClient, private router: Router) {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
  }

  isLoggedIn() {
    return this.token !== null;
  }

  login(payload: any, callback) {
    this.http.post(environment.registerUrl, payload)
    .subscribe(response => {
      callback(true);
      const token  = response['token'];
      if (token) {
        this.token = token;
        localStorage.setItem('currentUser', JSON.stringify({ login: this.login, token: this.token }));

      }
    }, loginError => this.error = loginError.message + ' : verify  your username or password !  ');
  }





  logout(): void {
    // clear token remove user from local storage to log user out
    this.token = null;
    localStorage.removeItem('currentUser');
  }

  private handelError(error: Response) {

    return Observable.throw(error.json() || 'server error');

  }



}
