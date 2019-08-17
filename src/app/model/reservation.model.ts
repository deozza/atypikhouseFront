import { Estate } from './estate.model';

export class Reservation {
  estate: Estate;
  nb_people: number;
  coming_at: Date;
  leaving_at: Date;
  total_price: number;
  more: string;
 }
