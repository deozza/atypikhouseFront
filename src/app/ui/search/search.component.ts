import { Component, OnInit } from '@angular/core';
import { FilterPipe} from './../../filter.pipe';
import * as $ from 'jquery';
import { Entity } from 'src/app/model/entity.model';
import { List } from 'src/app/model/list.model';
import { Pagination } from 'src/app/model/pagination.model';
import { DataService } from 'src/app/data/services/data.service';
import { Router } from '@angular/router';
import { Estate } from 'src/app/model/estate.model';
import { Properties } from 'src/app/model/properties.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
// $: any;

$: any;
private kind: string = 'estate';


entities: List<Entity>;
pagination: Pagination= new Pagination;
message: string;
estates:List<Entity>;
properties:Properties = new Properties;
constructor(private dataService: DataService, private router: Router) { }

ngOnInit() {
  
    this.pagination.filters = {'validationState' : 'published'};
  

  this.dataService.getEntities(this.kind, this.pagination.count, this.pagination.page, this.pagination.filters)
  .subscribe(e =>{
    this.updateCurrentPage(e)});




  //test
  this.estates = new List<Entity>() ;
  this.pagination = new Pagination();
  this.pagination.filters = {'validationState':'published'};
  this.pagination.count = 30;
  this.dataService.getEntities('estate').subscribe(
      (e)=> {this.estates = e;
        console.log(this.estates);
      },
      (error) => console.log(error)
  );
}


private updateCurrentPage(l: List<Entity>){
  this.estates = l;
  this.pagination.page = l.current_page_number;
  this.pagination.count = l.num_items_per_page;
  this.pagination.total = l.total_count;
  this.pagination.nb_pages = Math.ceil(this.pagination.total / this.pagination.count);

}

public changeCurrentPage(goToPage:number){
this.pagination.changingPage = true;
this.dataService.getEntities(this.kind, this.pagination.count, goToPage, this.pagination.filters).subscribe(l => {
  this.updateCurrentPage(l);
  this.pagination.changingPage = false;
});
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