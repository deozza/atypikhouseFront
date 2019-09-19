import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor() { }

  ngOnInit() {



  }
  closeModal() {
    console.log('CLOSE');
    let modal = document.getElementById('modal-rgpd');
    modal.classList.add('hidden-modal');
    let cookiedate = new Date();
    cookiedate.setDate(cookiedate.getDate() + 90);
    document.cookie = 'AtypikHouse-Cookies-Status=Accepted; Expires=' + cookiedate.toString + ';';

  }

}
