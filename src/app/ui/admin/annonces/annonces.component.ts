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
    this.pagination.filters = {'validationState':'estate_of_the_month'};
    this.pagination.count = 30;
    this.dataService.getAll('estate').subscribe(
        (e)=> {this.estates = e;
          console.log(this.estates)
         

        },
        (error) => console.log(error)
    );




  }

  close(){
    $("#admin-annonces").css({"filter": "blur(0px)"}, {"transition": "filter ease 0.5s"});
    $("#admin-annonces-overlay").toggleClass("admin-overlay-closed");
    $("#admin-annonces-overlay").toggleClass("admin-overlay-open");

}


  validateEstate(){
    $("#admin-annonces").css({"filter": "blur(6px)"}, {"transition": "filter ease 0.5s"});
    $("#admin-annonces-overlay").toggleClass("admin-overlay-closed");
    $("#admin-annonces-overlay").toggleClass("admin-overlay-open");
    this.message="confirm"
  };
  clearEstate(){
    $("#admin-annonces").css({"filter": "blur(6px)"}, {"transition": "filter ease 0.5s"});
    $("#admin-annonces-overlay").toggleClass("admin-overlay-closed");
    $("#admin-annonces-overlay").toggleClass("admin-overlay-open");
    this.message="erase"
  };


  validate(estate: Entity) {
    this.dataService.validateEntity(estate.uuid).subscribe(
      (t) => {
        this.router.navigate(['/crm']);
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

  goDetails(estate: Estate){
  this.router.navigate(['/estate', estate.uuid ])
  }

  getStatus(exp){
   if (exp.includes("posted")) 
   {
     return true
   }
  }

}
