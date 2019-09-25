import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Token } from 'src/app/model/token.model';

@Component({
  selector: 'app-activate-user',
  templateUrl: './activate-user.component.html',
  styleUrls: ['./activate-user.component.css']
})
export class ActivateUserComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router,private  auth: AuthService) { }

  routingSubscription: any;
  token: Token = new Token;
  

  ngOnInit() {
    this.routingSubscription =
    this.route.params.subscribe(params => {
    if (params.token) {
      this.token.token = params.token;
      this.auth.activateUser(this.token.activateUser())
      .subscribe(
        (e)=> {console.log(e);
          this.router.navigate(['/login']);
        },
        (error) => {
          this.router.navigate(['/error']);
          console.log(error);
        }
    );
    }
  });

  }

}
