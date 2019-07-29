import { Component, OnInit } from '@angular/core';
import { ApiService } from 'services/api.service';




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private api: ApiService) { }

  users: any[] = [];



  ngOnInit() {
  }

register(value: any){
  const body = {
    username: value.username,
    password : {
      first: value.first,
      second: value.second
    },
    email: value.email
  };

  this.api.addItem('user', body, result => {
    if (result) {
      console.log('ok');
    }
  });
}


  /*newUser(value: any) {
    const body = {
      email: value.email,
      firstName: value.firstName,
      userName: value.userName,
      password: value.password,
      date_naissance: value.date_naissance

    };
    this.users.push(body);
    console.log(body);


  }*/

}
