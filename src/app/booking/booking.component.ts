import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Reservation } from '../model/reservation.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  constructor(private api: ApiService, private route: Router) { }

  booking: Reservation;

  ngOnInit() {
    this.booking = new Reservation();
  }

  save(value: any) {
    console.log(this.booking);
    /*this.api.addItem('property', this.estate, result => {
      if (result) {
        console.log('ok');
      }
    });*/
  }

  cancel() {
    this.route.navigate(['/']);
  }

}
