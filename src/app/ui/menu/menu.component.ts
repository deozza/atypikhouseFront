import {Component, OnInit} from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public isConnected:boolean;

  constructor(public auth: AuthService) { }

  ngOnInit() {
    this.isConnected = this.auth.hasToken();
    const burger = document.getElementById('burger');
    const mobilenav = document.getElementById('mobile-nav');
    const profileItem = document.getElementById('profile-item');
    const profileMenu = document.getElementById('profile-links');

    $( window ).resize(function() {
      if($('#burger').hasClass( 'burger-close' )) {
        toggleMenu();
      }else{

      }
    });
    function toggleMenu() {
        burger.classList.toggle('burger');
        burger.classList.toggle('burger-close');
        mobilenav.classList.toggle('mobile-nav-visible');
        mobilenav.classList.toggle('mobile-nav-hidden');

        if($('#burger').hasClass( 'burger-close' )) {
          $('body').css('overflow', 'hidden' )
        }else{
          $('body').css('overflow', 'visible' )

        }
    }

    function toggleProfileMenu() {
        profileMenu.classList.toggle('profile-links-visible');
        profileMenu.classList.toggle('profile-links-hidden');
    }

    profileItem.onclick = toggleProfileMenu;
    burger.onclick = toggleMenu;

  }

  logout() {
    this.auth.deleteToken();
    window.location.reload();
  }
}
