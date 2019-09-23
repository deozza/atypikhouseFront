import { Estate } from './estate.model';
import {User} from './user.model';
import * as moment from 'moment';

export class Reservation {

  estate: Estate;
  nb_people: number;
  coming_at: Date;
  leaving_at: Date;
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

  

 }

