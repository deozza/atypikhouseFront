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



}

// $( "input" ).prop( "disabled", true ); //Disable
// $( "input" ).prop( "disabled", false ); //Enable

// $('#fieldId').attr('disabled', 'disabled'); //Disable
// $('#fieldId').removeAttr('disabled'); //Enable
