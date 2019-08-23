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
    this.router.navigate(['/']);
    console.log(t);
  },
   (error) => {
    this.loading = false;
    console.log(error);
  }

 );
  }

}
