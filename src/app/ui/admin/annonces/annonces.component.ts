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
    this.pagination.filters = {'equal.validationState' : 'posted'};
    this.pagination.count = 30;
    this.dataService.getEntities('estate', this.pagination.count,1, this.pagination.filters).subscribe(
        (e)=> {this.estates = e;},
        (error) => console.log(error)
    );
  }



  validateEstate(estate: Entity) {
    this.dataService.validateEntity(estate.uuid).subscribe(
      (t) => {
        alert("l'annonce est bien validée");
        this.router.navigate(['/admin-annonces']);
      },
      (error) => {
        if(error.status == 409) {
          this.router.navigate(['/crm']);
        }
        else
       console.log(error);
     }

    );
  }
  deleteFrom(estate: Estate){
    this.router.navigate(['/clearEstateForm', estate.uuid ])
  }
  goDetails(estate: Estate){
  this.router.navigate(['/estate', estate.uuid ])
  }

  getStatus(exp){
   if (exp.includes("posted"))
   {
     return true
   }
  }

  getStar(exp){
    if (exp.includes("published"))
    {
      return true
    }
   }

}
