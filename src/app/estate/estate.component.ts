import { Component, OnInit, Input } from '@angular/core';
import { Estate } from '../model/estate.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { Reservation } from '../model/reservation.model';


@Component({
  selector: 'app-estate',
  templateUrl: './estate.component.html',
  styleUrls: ['./estate.component.css']
})
export class EstateComponent implements OnInit {
  @Input() estate: Estate;
  constructor(private api: ApiService, private route: Router) { }
  booking: Reservation;
  expression = false;

  viewBooking() {
    this.expression = true;
  }
  ngOnInit() {
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
