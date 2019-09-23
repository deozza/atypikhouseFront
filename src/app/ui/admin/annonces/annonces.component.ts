import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Entity } from 'src/app/model/entity.model';
import { List } from 'src/app/model/list.model';
import { Pagination } from 'src/app/model/pagination.model';
import { DataService } from 'src/app/data/services/data.service';
import { Router } from '@angular/router';
import { Estate } from 'src/app/model/estate.model';

@Component({
  selector: 'app-annonces',
  templateUrl: './annonces.component.html',
  styleUrls: ['./annonces.component.css']
})
export class AnnoncesComponent implements OnInit {
  // $: any;
  pagination: Pagination;
  message: string;
  estates:List<Entity>;
  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {

    this.estates = new List<Entity>() ;
    this.pagination = new Pagination();

    this.pagination.count = 3;
    this.dataService.getEntities('estate', this.pagination.count, 1).subscribe(
        (e)=> {this.estates = e;
          console.log(this.estates)

        },
        (error) => console.log(error)
    );




  }


  validateEstate(i){
/** PUSH VALIDATION STATE */
/** TOGGLE CLASS WHEN PUSHED */
  };




  delete(estate: Entity) {
    this.dataService.deleteEntity(estate.uuid).subscribe(
      (t) => {this.router.navigate(['/annonces']);
     },
      (error) => {
       console.log(error);
     }
    );
  }

  validate(estate: Entity) {
    this.dataService.validateEntity(estate.uuid).subscribe(
      (t) => {this.router.navigate(['/annonces']);
     },
      (error) => {
       console.log(error);
     }

    );


  }

}
