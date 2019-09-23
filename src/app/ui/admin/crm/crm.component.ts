import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data/services/data.service';
import { Pagination } from 'src/app/model/pagination.model';
import { List } from 'src/app/model/list.model';
import { Entity } from 'src/app/model/entity.model';


@Component({
  selector: 'app-crm',
  templateUrl: './crm.component.html',
  styleUrls: ['./crm.component.css']
})
export class CrmComponent implements OnInit {
pagination: Pagination;
notifications:List<Entity>;
  constructor(private api: DataService) {

  }

  ngOnInit() {
    this.pagination = new Pagination();
    this.pagination.filters = {'validationState':'estate_of_the_month'};
    this.pagination.count = 30;
    this.api.getEntities('notification', this.pagination.count, 1, this.pagination.filters).subscribe(
        (n)=> {
          console.log(n)
          this.notifications = n;
        },
        (error) => console.log(error)
    );

  }



}
