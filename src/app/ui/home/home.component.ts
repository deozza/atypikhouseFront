import { Component, OnInit } from '@angular/core';
import { Pagination } from 'src/app/model/pagination.model';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  pagination_slide: Pagination = new Pagination();
  ngOnInit() {
    this.pagination_slide.count= 4;
    $( document ).ready(function() {
      let i;

      let h3Items =  $( ".LineSliderItem h3" );

      for (i = 0; i < h3Items.length; i++) {
        let content = h3Items[i].textContent;

        if( content == 'nature_vibes'){
          h3Items[i].textContent = 'Pour un retour à la nature';
        }
        else if(content == 'beach_vibes')
        h3Items[i].textContent = 'En bord de mer';
      }

  });


  }

}
