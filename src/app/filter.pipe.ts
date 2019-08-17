import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items) { return []; }
    if (!searchText) { return items; }

    searchText = searchText.toLowerCase();
    return items.filter( it => {
          return it.name.toLowerCase().includes(searchText);
        });
   }

   search(items: any[], searchCity: string): any[] {
    if (!items) { return []; }
    if (!searchCity) { return items; }

    searchCity = searchCity.toLowerCase();
    return items.filter( it => {
          return it.name.toLowerCase().includes(searchCity);
        });
   }
}
