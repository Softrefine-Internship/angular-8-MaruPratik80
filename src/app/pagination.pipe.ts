import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pagination',
})
export class PaginationPipe implements PipeTransform {
  transform(items: any[], currentPage: number, itemsPerPage: number): any[] {
    if (!items || items.length === 0) return [];
    const start = (currentPage - 1) * itemsPerPage;
    return items.slice(start, start + +itemsPerPage);
  }
}
