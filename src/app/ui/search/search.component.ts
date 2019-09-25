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
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
// $: any;

$: any;
private kind: string = 'estate';
searchText: string;
entities: List<Entity>;
pagination: Pagination= new Pagination;
message: string;
estates:List<Entity>;
properties:Properties = new Properties;
constructor(private dataService: DataService, private router: Router, private _sanitizer: DomSanitizer) { }

ngOnInit() {
this.estates = new List<Entity>() ;
this.pagination = new Pagination();
this.pagination.filters = {'equal.validationState' : 'published'};
this.pagination.count = 200;
this.dataService.getEntities('estate', this.pagination.count, 1).subscribe(
    (e)=> {this.estates = e;
    },
    (error) => console.log(error)
);

}

sanitize(images: any[]){
  let imagePaths:any[]= [];
  if(images)
  for(let image of images){imagePaths.push('data:image/png;base64,' +
  (this._sanitizer.bypassSecurityTrustResourceUrl(image) as any).changingThisBreaksApplicationSecurity);}

  return imagePaths[0];           
}

public getImagePath(exp) {
  if (exp != undefined) {
    return exp; //  after get the image from documents service
  }
  else{
    return '../../../assets/images/bg/BG-03.jpg';
  }
  
}



goDetails(estate: Estate){
this.router.navigate(['/estate', estate.uuid ])
}



 

}