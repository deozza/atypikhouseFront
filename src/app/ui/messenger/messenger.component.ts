import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-messenger',
  templateUrl: './messenger.component.html',
  styleUrls: ['./messenger.component.css']
})
export class MessengerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function() {
      $('.profileConversation').click(function(e) {
        e.preventDefault();
        $('.profileConversation').removeClass('activeConversation');
        $(this).toggleClass('activeConversation');
        console.log("CLICKED CONVO");
      });
  });
  }

}
