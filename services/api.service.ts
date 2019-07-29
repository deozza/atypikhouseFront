import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest, HttpErrorResponse} from '@angular/common/http';
import { AuthService } from './auth.service';
import { callbackify } from 'util';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  endpoint = 'https://murmuring-refuge-10283.herokuapp.com/api';
  registerUrl = 'http://localhost:8000/api/token';

  constructor(private http: HttpClient, private auth: AuthService) {}
  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Headers' : 'origin, Authorization',
      'Access-Control-Allow-Origin' : '*',
      'Content-Type': 'application/json',
      Authorization: 'token_userActif'


    })

  };








  get(id: string, url: string, callback) {
    this.http.get(`${this.endpoint}/${url}/${id}`)
    .subscribe(response => {
      callback(response);
    });
  }

  getList(url: string, callback) {
    this.http.get(`${this.endpoint}/${url}`, this.httpOptions)
    .subscribe(response => {
      callback(response);
    },
    error => console.error(error.message));
  }

  addItem(url: string, value: any, callback) {


    this.http.post(`${this.endpoint}/${url}`, value)
    .subscribe(response => {
      callback(true);
    });
  }

  login(payload: any) {
    return this.http.post(this.registerUrl, payload);
  }


}
