import {Component, OnInit} from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import * as $ from 'jquery';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public isConnected:boolean;

  constructor(public auth: AuthService, private router: Router) { }

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

    $('#mobile-nav a').click(function(){
      console.log('Heeeeey');
      // toggleMenu();
      //Trying to make the menu toggle when link has been clicked
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
