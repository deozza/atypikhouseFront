import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { AuthService } from '../services/auth.service';
import { ApiService } from '../services/api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  user: User;

  constructor(public auth: AuthService, private api: ApiService, private router: Router, private route: ActivatedRoute,) { }

  ngOnInit() {
    this.user = new User();
    //get the current user
    if(this.auth.isLoggedIn){
      this.api.getList('user/current', user => {
        this.user = user;
        console.log(user.id);
      });
    }
  }

  edit() {
    this.router.navigate(['/edit-profil']);
  }



}
