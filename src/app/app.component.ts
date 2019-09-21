import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {Router, NavigationEnd} from '@angular/router';


// declare ga as a function to set and sent the events
 declare let ga: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'AtypikHouse';
  ga: Function;

  constructor(private router: Router, private titleService: Title) {

    // subscribe to router events and send page views to Google Analytics
    this.router.events.subscribe(event => {

      if (event instanceof NavigationEnd) {
        ga('set', 'page', event.urlAfterRedirects);
        ga('send', 'pageview');
        console.log('NAVIGATION');
      }
    });




    }
    public setTitle( newTitle: string) {
      this.titleService.setTitle( newTitle );
    }



  }








