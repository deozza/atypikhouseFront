import { Component, OnInit } from '@angular/core';
import { List } from 'src/app/model/list.model';
import { Entity } from 'src/app/model/entity.model';
import { Pagination } from 'src/app/model/pagination.model';
import { DataService } from 'src/app/data/services/data.service';
import * as $ from 'jquery';


@Component({
  selector: 'app-messenger',
  templateUrl: './messenger.component.html',
  styleUrls: ['./messenger.component.css']
})
export class MessengerComponent implements OnInit {
  message: any[] = [];
  pagination: Pagination;
  conversations:List<Entity>;
    constructor(private api: DataService) {

    }

  ngOnInit() {
    $(document).ready(function() {
      $('.profileConversation').click(function(e) {
        e.preventDefault();
        $('.profileConversation').removeClass('activeConversation');
        $(this).toggleClass('activeConversation');
      });
  });

  this.pagination = new Pagination();
      this.pagination.count = 30;
      this.api.getEntities('conversation', this.pagination.count, 1).subscribe(
          (r)=> {
            this.conversations = r;

          },
          (error) => console.log(error)
      );
  }

  chat(uuid: string) {
      this.api.addEmbedded(this.message, uuid, 'message')
      .subscribe(
        data => {
          console.log(data);
        },
        error => {
          console.log(error);
        }
      );
  }

}
