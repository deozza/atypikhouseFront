export class List <T> {
  num_items_per_page:number;
  current_page_number:number;
  items: Array<T>;
  total_count:number;
}
