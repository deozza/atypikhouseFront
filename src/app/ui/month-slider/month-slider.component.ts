import { Component, OnInit } from '@angular/core';
import { Pagination } from 'src/app/model/pagination.model';
import { List } from 'src/app/model/list.model';
import { Estate } from 'src/app/model/estate.model';
import { DataService } from 'src/app/data/services/data.service';
import { Entity } from 'src/app/model/entity.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-month-slider',
  templateUrl: './month-slider.component.html',
  styleUrls: ['./month-slider.component.css']
})
export class MonthSliderComponent implements OnInit {
  pagination: Pagination;
  estate_1: any; estate_2: any; estate_3: any;
  estateOfTheMonth:List<Entity>;
  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
    this.estateOfTheMonth = new List<Entity>() ;
    this.pagination = new Pagination();
    this.pagination.filters = {'equal.validationState' : 'estate_of_the_month'};
    //this.pagination.filters = {'validationState':'estate_of_the_month'};
    this.pagination.count = 3;
    this.dataService.getEntities('estate', this.pagination.count, 1, this.pagination.filters).subscribe(
        (e)=> {this.estateOfTheMonth = e;

        /*this.estate_1 = this.estateOfTheMonth.items[0];
        this.estate_2 = this.estateOfTheMonth.items[1];
        this.estate_3 = this.estateOfTheMonth.items[1]*/
      },
        (error) => console.log(error)
    );

    var bullets = document.getElementsByClassName('bullet-slider');
    var bullet01 = bullets[0],
        bullet02 = bullets[1]

    var slides = document.getElementsByClassName('month-slide');
    var slide01 = slides[0],
        slide02 = slides[1]

    bullet01.addEventListener("click",switch01);
    bullet02.addEventListener("click",switch02);

    function switch01(){
        removeActiveClass();
        slide01.classList.add('active-slide');
        bullet01.classList.add('bullet-slide-active');
    }
    function switch02(){
        removeActiveClass();
        slide02.classList.add('active-slide');
        bullet02.classList.add('bullet-slide-active');
    }

    function removeActiveClass(){
        for (var i = 0; i < slides.length; i++) {
            slides[i].classList.remove('active-slide');
        }
        for (var i = 0; i < bullets.length; i++) {
            bullets[i].classList.remove('bullet-slider-active');
        }
    }
  }

  goDetails(estate: Estate) {
    this.router.navigate(['/estate', estate.uuid]);

  }
}
