import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-activate-user',
  templateUrl: './activate-user.component.html',
  styleUrls: ['./activate-user.component.css']
})
export class ActivateUserComponent implements OnInit {
  token: string;
  constructor(private route: ActivatedRoute, private router: Router,  private api: ApiService) { }

  ngOnInit() {

  }
  activeUser() {
    this.route.params.subscribe(params => {
      console.log(params["token"]);
      if(params["token"]) {
        this.token = params["token"];
        this.api.addItem('user/activate', this.token);
      }
    });




}
}
