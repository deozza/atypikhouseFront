import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/data/services/data.service';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/data/components/user/services/user.service';

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
        },
        (error) => console.log(error)
      );
      }Ò


}
