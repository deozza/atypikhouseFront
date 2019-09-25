import { Component,  OnInit,  AfterViewChecked } from '@angular/core';
import { DataService } from 'src/app/data/services/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Reservation } from 'src/app/model/reservation.model';
import { Estate } from 'src/app/model/estate.model';
import { Entity } from 'src/app/model/entity.model';
import {Location} from '@angular/common';

declare let paypal: any;
@Component({
  selector: 'app-paypal',
  templateUrl: './paypal.component.html',
  styleUrls: ['./paypal.component.css']
})
export class PaypalComponent implements AfterViewChecked, OnInit {



  constructor(private api: DataService, private route: ActivatedRoute, private router: Router,private _location: Location) { }
  backClicked() {
    this._location.back();
  }

  booking:Entity = new Entity;
  imagePaths:any[] = [];
  routingSubscription: any;
  price: number;
  finalAmount: number = 1;

  addScript: boolean = false;
  paypalLoad: boolean = true;
  ngOnInit() {
    this.routingSubscription =
    this.route.params.subscribe(params => {
    if (params.uuid) {
      this.api.getEntity(params.uuid)
      .subscribe(
        (e)=> {this.booking = e ;
          this.finalAmount = this.booking.properties.total_price
          console.log(e)
        },
        (error) => console.log(error)
    );
    }
  });

  }





  paypalConfig = {
    env: 'sandbox',
    client: {
      sandbox: 'AY43dXkMg6GwnNhcqc2pUqBP2a7UKZEuPkMhIOufOGViySd7ClIYfCXIWVXfUaKNhjpjDKnLLNcyY_i4',
      production: 'AcV9HsoPXhdBwWr5bvO0r7tx3liOjS-omVcNeBmHHiClm8ozsHHxK90gqoZsgsdqipGtBGYfXhpD_avI'
    },
    commit: true,
    payment: (data, actions) => {
      return actions.payment.create({
        payment: {
          transactions: [
            { amount: { total: this.finalAmount, currency: 'EUR' } }
          ]
        }
      });
    },
    onAuthorize: (data, actions) => {
      return actions.payment.execute().then((payment) => {
        //Do something when payment is successful.
        this.router.navigate(['/reservations'])

      },
      (error) =>
      {
        console.log(error);
        this.router.navigate(['/payment',  this.booking.uuid]);
      })
    }
  };

  ngAfterViewChecked(): void {

    if (!this.addScript) {
      this.addPaypalScript().then(() => {
        paypal.Button.render(this.paypalConfig, '#paypal-checkout-btn');
        this.paypalLoad = false;
      })
    }
  }

  addPaypalScript() {

    this.addScript = true;
    return new Promise((resolve, reject) => {
      let scripttagElement = document.createElement('script');
      scripttagElement.src = 'https://www.paypalobjects.com/api/checkout.js';
      scripttagElement.onload = resolve;
      document.body.appendChild(scripttagElement);
    })
  }


}
