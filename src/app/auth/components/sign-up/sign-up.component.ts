import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.model';
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
  errors = [];
  isSaved = false;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {

    function randomIntFromInterval(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
    const val = randomIntFromInterval(1,3);
    const backgroundImage = document.getElementById("signupSection");
    backgroundImage.style.backgroundImage = "url('../../../assets/images/bg/BG-0"+val+".jpg')";
    }

  public signUp() {
    this.loading = true;
    this.userService.postUser(this.newUser.postableUser()).subscribe(
      (t) => {
        this.isSaved = true;
       this.loading = false;
       this.router.navigate(['/']);
     },
      (error) => {
       this.loading = false;
       this.handleError(error);

     }
    );
  }

  private handleError(error){
    this.errors = [];
    if(error.status === 500) {
      this.errors.push("Erreur sur le serveur");
    }
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
