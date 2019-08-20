import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { User } from '../model/user.model';
import { Router } from '@angular/router';




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  value: any;

  constructor(private api: ApiService, private router: Router) { }

  newUser: User;


  ngOnInit() {
    this.newUser = new User();
  }

  saveUser() {
  this.api.addItem('user', this.newUser);
}



}
