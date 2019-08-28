import { Estate } from './estate.model';
import {User} from './user.model';
import * as moment from 'moment';

export class Reservation {
  uuid: string ;
  kind: string;
  owner: User;
  validation_state: string;
  last_update: string;
  date_of_creation: string;
  estate: Estate;
  nb_people: number;
  coming_at: Date;
  leaving_at: Date;
  total_price: number;
  more: string;

  public constructor(entity = null) {
    this.uuid = entity !== null ? entity.uuid : '';
    this.kind = entity !== null ? entity.kind : '';
    this.owner = entity !== null ? new User(entity.owner) : new User();
    this.validation_state = entity !== null ? entity.validation_state : '';
    this.last_update = entity !== null ? entity.last_update : '';
    this.date_of_creation = entity !== null ? entity.date_of_creation : '';
    this.estate = entity !== null ? new Estate(entity.estate) : new Estate();
    this.nb_people = entity !== null ? entity.nb_people : null;
    this.coming_at = entity !== null ? entity.coming_at : new Date();
    this.leaving_at = entity !== null ? entity.leaving_at : new Date();
    this.total_price = entity !== null ? entity.total_price : null;
    this.more = entity !== null ? entity.more : '';
  }


 }

