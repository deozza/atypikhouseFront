import { List } from './list.model';
import { Entity } from './entity.model';

export class Pagination  {
  count:number;
  page:number;
  total:number;
  nb_pages:number;
  changingPage:boolean;
  filters:any;
  items:List<Entity>;

  public constructor(count:number = 10,
                     page:number = 1,
                     total:number = 0,
                     nb_pages:number = 1,
                     changingPage:boolean = false,
                     filters:any = {},
                     items:List<Entity> = null,
                    ) {
    this.count = count;
    this.page = page;
    this.total = total;
    this.nb_pages = nb_pages;
    this.changingPage = changingPage;
    this.filters = filters;
    this.items = items;
  }

  public updateCurrentPage(l:List<Entity>) {
    this.page = l.current_page_number;
    this.count = l.num_items_per_page;
    this.total = l.total_count;
    this.nb_pages = Math.ceil(this.total / this.count);
    this.items = l;
    return this.items;
  }

}
