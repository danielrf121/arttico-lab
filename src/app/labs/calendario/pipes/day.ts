import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'day'
})
export class DayPipe implements PipeTransform {
  transform(value): any {
    if (!value) {
      return '-';
    }

    let date = value.substring(0,10).split('-');
    return date[2];
  }
}
