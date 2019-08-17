import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-request-password',
  templateUrl: './request-password.component.html',
  styleUrls: ['./request-password.component.css']
})
export class RequestPasswordComponent implements OnInit {
  url = 'password/reset/request';
  value: any;
  constructor(private api: ApiService, private route: ActivatedRoute, private router: Router ) { }

  ngOnInit() {
  }
 request(value: any){
    const payload = {
      login: value.email,
    };
    this.api.addItem(this.url, payload, data => {
      if (data) {
        this.router.navigate(["/"]);
      }
    })
  }




}
