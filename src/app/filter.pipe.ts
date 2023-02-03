import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchTerm: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchTerm) {
      return items;
    }
    searchTerm = searchTerm.toLowerCase();
    return items.filter((it) => {
      return (
        it.title.toLowerCase().includes(searchTerm) ||
        it.year.toString().includes(searchTerm) ||
        it.director.toLowerCase().includes(searchTerm) ||
        it.score.toString().includes(searchTerm)
      );
    });
  }
}
