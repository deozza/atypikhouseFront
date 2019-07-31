import { Estate } from './estate.model';

export interface Reservation {
  estate: Estate;
  nb_people: number;
  coming_at: Date;
  leaving_at: Date;
  total_price: number;
  more: string;
 }
