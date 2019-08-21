import { Estate } from './estate.model';
import {User} from './user.model';

export class Review {
  uuid: string ;
  kind: string;
  owner: User;
  validation_state: string;
  last_update: string;
  date_of_creation: string;
  estate: Estate;
  content: string;
  rating: number;

  public constructor(entity = null) {
    this.uuid = entity !== null ? entity.uuid : '';
    this.kind = entity !== null ? entity.kind : '';
    this.owner = entity !== null ? new User(entity.owner) : new User();
    this.validation_state = entity !== null ? entity.validation_state : '';
    this.last_update = entity !== null ? entity.last_update : '';
    this.date_of_creation = entity !== null ? entity.date_of_creation : '';
    this.estate = entity !== null ? new Estate(entity.estate) : new Estate();
    this.content = entity !== null ? entity.content : '';
    this.rating = entity !== null ? entity.rating : null;
  }
 }
