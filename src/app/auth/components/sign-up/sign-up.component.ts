import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.model';
import { DataService } from 'src/app/data/services/data.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/data/components/user/services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  newUser: User = new User();
  loading: boolean = false;
  isSaved: boolean = false;
  errors: any[] = [];
  error= false;

  constructor(private userService: UserService, private router: Router) { }


  ngOnInit() {

    function randomIntFromInterval(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
    const val = randomIntFromInterval(1,3);
    const backgroundImage = document.getElementById("signupSection");
    backgroundImage.style.backgroundImage = "url('../../../assets/images/bg/BG-0"+val+".jpg')";
    }

  public signUp()

  {
    this.loading = true;
    this.userService.postUser(this.newUser.postableUser()).subscribe(
      (t) => {
        this.isSaved = true;
       this.loading = false;
     
     },
      (error) => {
       this.loading = false;
       console.log(error);
       this.error = true;
            Object.entries(error.error.error.children).forEach(
               ([cle, value]) => {
                 Object.entries(value).forEach(
                ([key, value]) => {
                this.errors[cle] = value;
                 }
                );
               }
              );
     }

    );

  }

}
