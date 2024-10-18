import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'salary',
})
export class SalaryPipe implements PipeTransform {
  transform(value: number): string {
    return value > 999 ? (value / 1000).toFixed(1) + 'k' : value.toString();
  }
}
