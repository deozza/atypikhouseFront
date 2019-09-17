import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as $ from 'jquery';
import { Pagination } from 'src/app/model/pagination.model';
import { DataService } from 'src/app/data/services/data.service';
import { Entity } from 'src/app/model/entity.model';
import { List } from 'src/app/model/list.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-line-slider',
  templateUrl: './line-slider.component.html',
  styleUrls: ['./line-slider.component.css']
})
export class LineSliderComponent implements OnInit {
  $: any;
  private kind: string = 'estate';
  @Input() pagination:Pagination;
  @Input() estate_category: string;

  entities: List<Entity>;

  constructor(private dataService:DataService, private router: Router) { }

  ngOnInit() {
    if(this.estate_category !== undefined){
      this.pagination.filters = {'equal.properties.estate_category' : this.estate_category};
    }

    this.dataService.getEntities(this.kind, this.pagination.count, this.pagination.page, this.pagination.filters)
    .subscribe(e =>{
      console.log(e);
      this.updateCurrentPage(e)});



  }
  private updateCurrentPage(l: List<Entity>){
    this.entities = l;
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
goDetails(estate: Entity) {
  console.log("ok");
  this.router.navigate(['/estate', estate.uuid]);

}

}
