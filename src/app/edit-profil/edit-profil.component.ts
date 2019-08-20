import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { AuthService } from '../services/auth.service';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from '../../environments/environment';



@Component({
  selector: 'app-edit-profil',
  templateUrl: './edit-profil.component.html',
  styleUrls: ['./edit-profil.component.css']
})
export class EditProfilComponent implements OnInit {

  newUser: User;
  endpoint = environment.endpoint;


  constructor(public auth: AuthService, private api: ApiService, private router: Router, private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Headers' : 'origin, Authorization',
      'Access-Control-Allow-Origin' : '*',
      'Content-Type': 'application/json, media-type',
      Authorization: 'Bearer ' + this.auth.token
    })

  };

  ngOnInit() {
    this.newUser = new User();
    //get the current newUser
    if(this.auth.isLoggedIn){
      this.api.getList('user/current', user => {
        this.newUser = user;
        console.log(this.newUser);
      });
    }
  }

  edit() {
 this.http.patch(`${this.endpoint}/user/current`, this.newUser, this.httpOptions)
 .subscribe(
  data => {
    console.log(data);
  },
  error => {
    // tslint:disable-next-line: no-conditional-assignment

      console.log( error);


  }
);

  }




}
