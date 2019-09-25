import { Component, OnInit } from '@angular/core';
import { Credentials } from 'src/app/model/credentials.model';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { MenuComponent } from 'src/app/ui/menu/menu.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials: Credentials = new Credentials();
  loading: boolean = false;
  errors = [];
  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {
    function randomIntFromInterval(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
  }
    const val = randomIntFromInterval(1,3);
    const backgroundImage = document.getElementById("loginSection");
    backgroundImage.style.backgroundImage = "url('../../../assets/images/bg/BG-0"+val+".jpg')";
  }

  public login() {
    this.loading = true;
    this.auth.postToken(this.credentials).subscribe(
      (t) => {
        this.loading = false;
        window.location.assign('/');
      },
      (error) => {
        this.loading = false;
        this.handleError(error);
      }
    );
  }

  private handleError(error){
    this.errors = [];
    if(error.status === 400) {
      if(error.error.error.children === undefined){
        this.errors.push(error.error.error);
      }else{
        for (const value in error.error.error.children) {
          if (value === 'password') {
            this.errors.push(value+" : "+error.error.error.children[value].children.first.errors);
          } else {
            this.errors.push(!Array.isArray(error.error.error.children[value]) ? value+" : "+error.error.error.children[value].errors : undefined);
          }

        }
      }
    }
  }
}
