import { Component, OnInit } from '@angular/core';
import { Pagination } from 'src/app/model/pagination.model';
import { List } from 'src/app/model/list.model';
import { Entity } from 'src/app/model/entity.model';
import { DataService } from 'src/app/data/services/data.service';

@Component({
  selector: 'app-list-reservation',
  templateUrl: './list-reservation.component.html',
  styleUrls: ['./list-reservation.component.css']
})
export class ListReservationComponent implements OnInit {
  pagination: Pagination;
  reservations:List<Entity>;
    constructor(private api: DataService) {
  
    }
  
    ngOnInit() {
      console.log(this.getStatus(new Date("2019/09/20")));
      this.pagination = new Pagination();
     
      this.pagination.count = 30;
      this.api.getEntities('reservation', this.pagination.count, 1).subscribe(
          (r)=> {
            console.log(r.items);
            this.reservations = r;
            
          },
          (error) => console.log(error)
      );
  
    }

    getStatus(date: Date){
      let dateNow =  Date();
     if ((new Date(dateNow).getTime()) > (new Date(date).getTime()) )
     {
      return true;
     }

     return false;
     
    }
  
  
  
}
