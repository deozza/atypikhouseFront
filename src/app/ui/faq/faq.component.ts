import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      $(document).ready(function(){
        $(".question-answer").click(function(){



          $(this).toggleClass( "questionOpen");

        });
    });
  }



}
