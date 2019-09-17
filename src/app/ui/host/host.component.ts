import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-host',
  templateUrl: './host.component.html',
  styleUrls: ['./host.component.css']
})
export class HostComponent implements OnInit {

  public isConnected:boolean;

  constructor(public auth: AuthService) { }

  ngOnInit() {
    this.isConnected = this.auth.hasToken();
  }

}
