import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy',
})
export class OrderByPipe implements PipeTransform {
  transform(value: any[], sortKey: string, sortDirection: string): any[] {
    if (!value || !sortKey || !sortDirection) {
      return value;
    }
    return value.sort((a, b) => {
      let comparison = 0;
      if (a[sortKey] < b[sortKey]) {
        comparison = -1;
      } else if (a[sortKey] > b[sortKey]) {
        comparison = 1;
      }
      return sortDirection === 'desc' ? comparison * -1 : comparison;
    });
  }
}
