import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/data/services/data.service';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/data/components/user/services/user.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
user: User = new User;
editUser: boolean = false;

newUser: User = new User;
loading: boolean = false;
errors: any[] = [];
error= false;


  constructor(private route: ActivatedRoute,
    private router: Router,
    private api: UserService) { }

routingSubscription: any;

ngOnInit() {
     
      this.api.getUserCurrent()
      .subscribe(
        (e) => {
          this.user = e;
          console.log(this.user);
          this.newUser.email = this.user.email;
          this.newUser.username = this.user.username;
          //this.newUser.plainPassword = this.user.plainPassword;
        },
        (error) => console.log(error)
      );

      $(document).ready(function(){
        $('.profileForm input').attr('disabled', 'disabled'); //Disable

        $(".modifierForm").click(function(e){
          e.preventDefault();
          $('.profileForm input').removeAttr('disabled'); //Enable
          $('.profileForm button').removeAttr('disabled');

          console.log("CLOCKED YOUR ASS");
          $('.profileForm button').css({'opacity': '1','cursor':'pointer'});
          $('.profileForm input').css({'background-color': 'rgba(227, 227, 227, 0)','transition':'opacity ease 1s'});


        });

      });

  }

  editUserClick(){
    this.editUser = true;
  }

  public PatchUser()
  {
    console.log(this.newUser.patchableCurrent());
    this.loading = true;
    this.api.patchUserCurrent(this.newUser.patchableCurrent()).subscribe(
      (t) => {
       this.loading = false;
       console.log(t);
     },
      (error) => {
       this.loading = false;
       console.log(error);
       this.error = true;
            Object.entries(error.error.error.children).forEach(
               ([cle, value]) => {
                 Object.entries(value).forEach(
                ([key, value]) => {
                this.errors[cle] = value[0];
                 }
                );
               }
              );
            console.log(this.errors)
     }

    );

  }



}

// $( "input" ).prop( "disabled", true ); //Disable
// $( "input" ).prop( "disabled", false ); //Enable

// $('#fieldId').attr('disabled', 'disabled'); //Disable
// $('#fieldId').removeAttr('disabled'); //Enable
