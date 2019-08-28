import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/data/services/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Reservation } from 'src/app/model/reservation.model';
import { Estate } from 'src/app/model/estate.model';
import { MatDatepicker } from '@angular/material/datepicker';
import * as moment from 'moment';
import { Entity } from 'src/app/model/entity.model';

@Component({
  selector: 'app-estate',
  templateUrl: './estate.component.html',
  styleUrls: ['./estate.component.css']
})
export class EstateComponent implements OnInit {


  constructor(private api: DataService, private route: ActivatedRoute, private router: Router) { }

  estate:Entity ;
  booking: Reservation;
  expression = false;
  routingSubscription: any;
  properties: any;
  price: number;
s
  viewBooking() {
    this.expression = true;
  }
  ngOnInit() {
    this.booking = new Reservation();
    this.routingSubscription =
    this.route.params.subscribe(params => {
    console.log(params.uuid);
    if (params.uuid) {
      this.api.getEntity(params.uuid)
      .subscribe(
        (e)=> {this.estate = e ;
        this.price = this.estate.properties.price;
        },
        (error) => console.log(error)
    );
    }
  });
  console.log(this.estate.properties.price);
  this.booking.total_price=this.calculPrice(this.price, this.booking.leaving_at, this.booking.coming_at);

// javascript
var thumbnails = document.getElementsByClassName("estate-image-thumbnail");
var activeThumbnail = document.querySelectorAll('#estate-image-gallery-controller .thumbnail-active img')[0].src;



function mainImg(){
    var activeThumbnail = document.querySelectorAll('#estate-image-gallery-controller .thumbnail-active img')[0].src;
    var mainImgSrc = document.querySelectorAll('#main-estate-image img')[0];

    mainImgSrc.setAttribute("src",activeThumbnail);
}
mainImg();

for (var i = 0; i < thumbnails.length; i++) {

            thumbnails[i].addEventListener("click",function(){
                for (var k = 0; k < thumbnails.length; k++) {
                    thumbnails[k].classList.remove('thumbnail-active');
                    this.classList.add('thumbnail-active');
                    mainImg();
                }
            });
 }


var ctaReservation = document.getElementById('CTA-reservation');

var overlay = document.getElementById('reservation-overlay');
var closeOverlay = document.getElementById('close-overlay');

ctaReservation.addEventListener("click",function(e){
    e.preventDefault();

    overlay.style.right = '0';
    document.querySelectorAll("html")[0].style.overflow= "hidden"

})

closeOverlay.addEventListener("click",function(){
    overlay.style.right = "-100vw";
     document.querySelectorAll("html")[0].style.overflow= "auto";

})



  }



  save(value: any) {

    console.log(this.booking);
    /*this.api.addItem('property', this.estate, result => {
      if (result) {
        console.log('ok');
      }
    });*/
  }



  getClass(utility) { (2)
    switch (utility) {
      case 'chauffage':
        return 'fas fa-fire';
      case 'tv':
        return 'fas fa-tv';
      case 'heater':
        return 'fas fa-shower';
    }
  }

  public calculPrice(price: number, date1: Date, date2: Date) {

    const diffTime = Math.abs(new Date(date2).getTime() - new Date(date1).getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    let total_price = price * diffDays;

    return total_price;

  }


}
