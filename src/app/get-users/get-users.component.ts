import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest, HttpErrorResponse} from '@angular/common/http';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-get-users',
  templateUrl: './get-users.component.html',
  styleUrls: ['./get-users.component.css']
})
export class GetUsersComponent implements OnInit {
  public token;
  users: [User];
  endpoint = 'https://murmuring-refuge-10283.herokuapp.com/api/users';
  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Headers' : 'origin, Authorization',
      'Access-Control-Allow-Origin' : '*',
      'Content-Type': 'application/json',
       Authorization : 'Bearer:' + this.auth.token
    })

  };

  constructor(private auth: AuthService,
              private router: Router,
              private api: ApiService,
              private http: HttpClient) { }




  ngOnInit() {
    this.getUsers(list => {
      this.users = list.items;
      console.log(this.users);
    });
  }

  goDetails(user: User) {
    this.router.navigate(['/user', user.uuid]);
  }

  getUsers(callback) {
    this.http.get(`${this.endpoint}`, this.httpOptions)
    .subscribe(response => {
      callback(response);
    });
  }


}
