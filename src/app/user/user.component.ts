import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';
import { User } from '../model/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() user: User;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private api: ApiService) { }

  routingSubscription: any;



  ngOnInit() {
  this.routingSubscription =
  this.route.params.subscribe(params => {
    console.log(params["id"]);
    if(params["id"]) {
      this.api.get(params["id"], '', response => {
        this.user = response;
      });
    }
  });
  }

  ngOnDestroy() {
    this.routingSubscription.unsubscribe();
  }

}
