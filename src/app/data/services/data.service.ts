import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import {Observable, throwError} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import { Entity } from 'src/app/model/entity.model';
import { List } from 'src/app/model/list.model';
import { stringify } from 'querystring';

const API_URL = environment.apiUrl;

@Injectable({
    providedIn: 'root'
})
export class DataService {

  constructor(
      private http: HttpClient
  ) { }

  public getEntity(uuid: string): Observable<Entity> {
    return this.http.get<Entity>(API_URL + '/entity/' + uuid);
  }

  public getList() {
    return this.http.get(API_URL + '/doc/enumerations');
  }


  public getEntities(kind: string, count: number = 10, page: number = 1, filters = null): Observable<List<Entity> > {
    let url = API_URL + '/entities/' + kind + '?count=' + count + '&page=' + page ;
    if (filters !== {}) {
          // tslint:disable-next-line: forin
          for (const key in filters) {
        url += '&filterBy' + key + '=' + filters[key] ;
      }
    }
    return this.http.get<List<Entity>>(url);
  }


  public addEntity(value: any, kind: string): Observable<any> {
    return this.http.post<any>(API_URL + '/entity/' + kind, value);
  }


  public editEntity(uuid: string, value: Entity): Observable<Entity> {
    return this.http.patch<Entity>(API_URL + '/entity/' + uuid, value);
  }

  public validateEntity(uuid: string, value: Entity): Observable<Entity> {
    return this.http.patch<Entity>(API_URL + '/validate/' + uuid, value);
  }
  public deleteEntity(uuid: string): Observable<Entity> {
    return this.http.delete<Entity>(API_URL + '/entity/' + uuid);
  }
  postFile(uuid: string, property: string, file: Blob)
  {
    return this.http.post(API_URL + '/entity/' + uuid + '/file/' + property, file);
  }

  deleteFile(uuid: string, property: string, filename: string = null)
  {
    if(filename !== null) {
      let headers = new HttpHeaders();
      headers.append('X-File-Name', filename);
      return this.http.delete(API_URL + '/entity/' + uuid + '/file/' + property, {headers: headers});
    }
    return this.http.delete(API_URL + '/entity/' + uuid + '/file/' + property);

  }

  public addEmbedded(value: any, uuid: string, property: string): Observable<any> {
    return this.http.post<any>(API_URL + '/entity/' + uuid + '/embedded/' + property , value);
  }






}
