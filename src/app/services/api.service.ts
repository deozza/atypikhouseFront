import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { AuthService } from './auth.service';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  endpoint = environment.endpoint;

  constructor(private http: HttpClient, private auth: AuthService) {}

    httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Headers' : 'origin, Authorization',
        'Access-Control-Allow-Origin' : '*',
        'Content-Type': 'application/json, media-type',
        Authorization: 'Bearer ' + this.auth.token
      })

    };



  get(id: string, url: string, callback) {
    this.http.get(`${this.endpoint}/${url}/${id}`, this.httpOptions)
    .subscribe(response => {
      callback(response);
    });
  }

  getList(url: string, callback) {
    this.http.get(`${this.endpoint}/${url}`, this.httpOptions)
    .subscribe(response => {
      callback(response);
    });
  }

  addItem(url: string, value: any) {
    return this.http.post(`${this.endpoint}/${url}`, value, this.httpOptions);
  }

  updateItem(id: string, url: string, value: any, callback) {
    this.http.patch(`${this.endpoint}/${url}/${id}`, value, this.httpOptions)
    .subscribe(response => {
      callback(true);
    });
  }

  deleteItem(id: string, url: string, callback) {
    this.http.delete(`${this.endpoint}/${url}/${id}`, this.httpOptions)
    .subscribe(response => {
      callback(true);
    });
  }


}
