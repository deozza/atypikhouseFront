import { Estate } from './estate.model';
import {User} from './user.model';
import * as moment from 'moment';

export class Reservation {

  estate: Estate;
  nb_people: number;
  coming_at: any;
  leaving_at: any;
  total_price: number;
  more: string;
 

  public constructor(entity = null) {

    this.estate = entity !== null ? new Estate(entity.reservation) : new Estate();
    this.nb_people = entity !== null ? entity.nb_people : null;
    this.coming_at = entity !== null ? entity.coming_at : new Date();
    this.leaving_at = entity !== null ? entity.leaving_at : new Date();
    this.total_price = entity !== null ? entity.total_price : null;
    this.more = entity !== null ? entity.more : '';
    
  }

  public sanitizeBooking() {
    let booking = {};
    booking["estate"] = this.estate.uuid;
    booking["nb_people"] = this.nb_people;
    booking["coming_at"] = this.sanitizeDate(this.coming_at);
    booking["leaving_at"] = this.sanitizeDate(this.leaving_at);
    booking["total_price"] = this.total_price;
    booking["more"] = this.more;
   
    return booking;
  }

  private sanitizeDate(date:Date): string{
    return new Date(date).getFullYear()+"-"+ new Date(date).getMonth().toString().padStart(2, "0") +"-"+new Date(date).getDate().toString().padStart(2, "0")+"T"+new Date(date).getHours().toString().padStart(2, "0")+":"+new Date(date).getMinutes().toString().padStart(2, "0")+":"+new Date(date).getSeconds().toString().padStart(2, "0") + "+00:00";
  }
 }

