import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/data/services/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Reservation } from 'src/app/model/reservation.model';
import { Estate } from 'src/app/model/estate.model';
import { DomSanitizer } from '@angular/platform-browser';


import { Entity } from 'src/app/model/entity.model';

@Component({
  selector: 'app-estate',
  templateUrl: './estate.component.html',
  styleUrls: ['./estate.component.css']
})

export class EstateComponent implements OnInit {


  constructor(private _sanitizer: DomSanitizer, private api: DataService, private route: ActivatedRoute, private router: Router) { }

  estate:Entity = new Entity;
  booking: Reservation = new Reservation ();
  imagePaths:any[] = [];
  routingSubscription: any;
  price: number;
  src: any;


  ngOnInit() {
    this.routingSubscription =
    this.route.params.subscribe(params => {
    if (params.uuid) {
      this.api.getEntity(params.uuid)
      .subscribe(
        (e)=> {this.estate = e ;
          this.price = this.estate.properties.price;
          this.booking.estate.uuid = params.uuid;
          for(let image of this.estate.properties.image) {
            if(image){
              this.imagePaths.push('data:image/jpg;base64,' +
              (this._sanitizer.bypassSecurityTrustResourceUrl(image) as any).changingThisBreaksApplicationSecurity);
            }
          }
          console.log(this.imagePaths);
        },
        (error) => console.log(error)
    );
    }
  });
  // javascript
var thumbnails = document.getElementsByClassName("estate-image-thumbnail");
var activeThumbnail = document.querySelectorAll('#estate-image-gallery-controller .thumbnail-active img')[0].getAttribute('src');
function mainImg(){
    var activeThumbnail = document.querySelectorAll('#estate-image-gallery-controller .thumbnail-active img')[0].getAttribute('src');
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

calculate()
{
  var dd= new Date(this.booking.leaving_at).getTime();
  var da= new Date(this.booking.coming_at).getTime();
  console.log(dd);
   if ( !(dd) || !(da) || da>dd ) {
      this.booking.total_price=0;
      return;
  }
  var days = ( (  dd - da ) / (1000*60*60*24) );
  console.log(days);
  var cost = days * this.price;
  if (isNaN(cost))
     cost = 0;
  this.booking.total_price = cost;
  }






  saveReservation() {
    console.log(this.booking);
    this.api.addEntity(this.booking, 'reservation')
    .subscribe(
      (t) => {
       this.router.navigate(['/']);
       console.log(t);
     },
      (error) => {
       console.log(error);
     }
    );
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








}
