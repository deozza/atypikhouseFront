import { Component, OnInit } from '@angular/core';
import { ApiService } from 'services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private api: ApiService) { }
  list: [];

  ngOnInit() {
    this.getEntities();
  }

  getEntities()
  {
    this.api.getList('doc/entities', list => {
      this.list = list;
      console.log(list);
    });
  }

}
