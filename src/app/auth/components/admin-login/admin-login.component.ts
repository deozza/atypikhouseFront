import { Component, OnInit } from '@angular/core';
import { Credentials } from 'src/app/model/credentials.model';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  credentials: Credentials = new Credentials();
  loading: boolean = false;
  constructor(private auth: AuthService, private router: Router) {}


  ngOnInit() {
    function randomIntFromInterval(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
  }
  var val = randomIntFromInterval(1,3);


  var backgroundImage = document.getElementById("loginSection");
  backgroundImage.style.backgroundImage = "url('https://source.unsplash.com/random')";

  }

  public login() {
    this.loading = true;
    this.auth.postToken(this.credentials).subscribe(
   (t) => {
    this.loading = false;
    window.location.assign('/crm');
  },
   (error) => {
    this.loading = false;
    console.log(error);
  }

 );
  }

}
