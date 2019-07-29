import { Component, OnInit } from '@angular/core';
import { ApiService } from 'services/api.service';
import { AuthService } from 'services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public token;

  constructor(private api: ApiService, private auth: AuthService, private route: ActivatedRoute, private router: Router ) { }

  ngOnInit() {
  }

  login(value: any) {
    const payload = {
      login: value.logint,
      password: value.password
    };
    this.api.login(payload)
      .subscribe(data => {
        this.token = data['token'];
        this.auth.setToken(this.token);
        this.router.navigate(["/"]);

      },
      error => {
        console.error(error.error);
      });
  }

}
