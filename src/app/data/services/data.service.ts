import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import {Observable, throwError} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import { Entity } from 'src/app/model/entity.model';
import { List } from 'src/app/model/list.model';

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


  public getEntities(kind: string, count: number = 10, page: number = 1, filters = null): Observable<List<Entity> > {
    let url = API_URL + '/entities/' + kind + '?count=' + count + '&page=' + page ;
    if (filters !== {}) {
          // tslint:disable-next-line: forin
          for (const key in filters) {
        url += '&filterBy[' + key + ']=' + filters[key];
      }
    }
    return this.http.get<List<Entity>>(url);
  }


  public addEntity(value: Entity, kind: string): Observable<Entity> {
    return this.http.post<Entity>(API_URL + '/entity/' + kind, value);
  }


  public editEntity(uuid: string, value: Entity): Observable<Entity> {
    return this.http.patch<Entity>(API_URL + '/entity/' + uuid, value);
  }

  uploadFile()
  {

  }


  getFiles()
  {

  }


}
