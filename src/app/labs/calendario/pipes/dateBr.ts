import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateBr'
})
export class DateBrPipe implements PipeTransform {
  transform(value): any {
    if (!value || (typeof value !== 'string')) {
      return '';
    }

    let date = value.substring(0,10).split('-');
    let dateFinal = date[2] + '/' + date[1] + '/' + date[0];

    return dateFinal;
  }
}
