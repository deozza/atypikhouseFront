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
  
 

this.estates = new List<Entity>() ;
this.pagination = new Pagination();
this.pagination.filters = {'equal.validationState' : 'published'};
this.pagination.count = 30;
this.dataService.getEntities('estate', this.pagination.count, 1, this.pagination.filters).subscribe(
    (e)=> {this.estates = e;
      console.log(this.estates);
    },
    (error) => console.log(error)
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