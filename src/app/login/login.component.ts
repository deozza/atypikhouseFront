import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public token;
  login: string;
  password: string;
  error: string;

  constructor(private api: ApiService, private auth: AuthService, private route: ActivatedRoute, private router: Router) {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
  }

  ngOnInit() {
  }
  RequestPass() {
    this.router.navigate(['/request_password']);
  }

  logUser() {
    const payload = {
      login : this.login,
      password: this.password
    }
    this.auth.login(payload, result => {
      if(result) {
        this.router.navigate(['/']);
        console.log(result);
      }
    });

  }

}
