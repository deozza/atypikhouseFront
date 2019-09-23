import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-admin-nav',
  templateUrl: './admin-nav.component.html',
  styleUrls: ['./admin-nav.component.css']
})
export class AdminNavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function() {
      // $('#admin-nav ul').css('top','500px');
      // let scroll = $('body').scrollTop();
      // console.log("SCROLL"+scroll);
      // $('.question-answer').click(function() {
      //   $(this).toggleClass( 'questionOpen');
      // });
  });
  }

}
