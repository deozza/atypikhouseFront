import { Component, OnInit } from '@angular/core';
import { Pagination } from 'src/app/model/pagination.model';
import { List } from 'src/app/model/list.model';
import { Entity } from 'src/app/model/entity.model';
import { DataService } from 'src/app/data/services/data.service';

@Component({
  selector: 'app-avis',
  templateUrl: './avis.component.html',
  styleUrls: ['./avis.component.css']
})
export class AvisComponent implements OnInit {
  pagination: Pagination;
  reviews:List<Entity>;
    constructor(private api: DataService) {
  
    }
  
    ngOnInit() {
      this.pagination = new Pagination();
      this.pagination.filters = {'validationState':'estate_of_the_month'};
      this.pagination.count = 30;
      this.api.getEntities('review', this.pagination.count, 1, this.pagination.filters).subscribe(
          (n)=> {
            console.log(n)
            this.reviews = n;
          },
          (error) => console.log(error)
      );
  
    }
  
  
  
}
