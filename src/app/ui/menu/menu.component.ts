import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  isConnected: boolean;
  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.isConnected = this.auth.hasToken();
    console.log(this.isConnected);


    const burger = document.getElementById('burger');
    const mobilenav = document.getElementById('mobile-nav');
    const profileItem = document.getElementById('profile-item');
    const profileMenu = document.getElementById('profile-links');

    function toggleMenu() {
        burger.classList.toggle('burger');
        burger.classList.toggle('burger-close');
        mobilenav.classList.toggle('mobile-nav-visible');
        mobilenav.classList.toggle('mobile-nav-hidden');
    }

    function toggleProfileMenu() {
        profileMenu.classList.toggle('profile-links-visible');
        profileMenu.classList.toggle('profile-links-hidden');
    }


    profileItem.onclick = toggleProfileMenu;
    burger.onclick = toggleMenu;





  }

}
