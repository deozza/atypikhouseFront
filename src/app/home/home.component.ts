import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { FilterPipe} from '../filter.pipe';
import { Pipe, PipeTransform} from '@angular/core';
import { Estate } from '../model/estate.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private api: ApiService, public filter: FilterPipe) { }
  list: Estate [];
  filteredList: Estate [];

  // tslint:disable-next-line: variable-name
  public _searchTerm: string;

  // We are binding to this property in the view template, so this
  // getter is called when the binding needs to read the value
  get searchTerm(): string {
    return this._searchTerm;
  }

  // This setter is called everytime the value in the search text box changes
  set searchTerm(value: string) {
    this._searchTerm = value;
    this.filteredList = this.filterList(value);
  }

  filterList(searchString: string) {
    return this.list.filter(estate =>
      estate.title.toLowerCase().indexOf(searchString.toLowerCase()) !== -1);
  }


  ngOnInit() {
    this.getEntities();
    this.filteredList = this.list;
  }



  getEntities() {
this.list = [
  {
    title: 'title 1',
    description: 'description 1',
    surface: 30,
    rooms: 2,
    bathrooms: 2 ,
    city: 'Nice'
  },
  {
    title: 'title 2',
    description: 'description 2',
    surface: 25,
    rooms: 1,
    bathrooms: 1,
    city: 'Marseilles'
  },
  {
    title: 'title 3',
    description: 'description 3',
    surface: 50,
    rooms: 2,
    bathrooms: 2,
    city: 'Versailles'
  }
];
    /*this.api.getList('doc/entities', list => {
      this.list = list;
    });*/
  }

}
