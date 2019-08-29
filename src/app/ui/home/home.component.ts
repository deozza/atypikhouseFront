import { Component, OnInit } from '@angular/core';
import { Pagination } from 'src/app/model/pagination.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  pagination_slide: Pagination = new Pagination();
  ngOnInit() {
    this.pagination_slide.count= 4;
  }

}
