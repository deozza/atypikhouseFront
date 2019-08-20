import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ApiService } from '../services/api.service';
import { User } from '../model/user.model';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user: User;

  constructor(public auth: AuthService, private api: ApiService) { }

  ngOnInit() {
    //get the current user
    if(this.auth.isLoggedIn){
      this.api.getList('user/current', user => {
        this.user = user;
      });
    }
  }
  logout() {
    this.auth.logout();
  }

}
