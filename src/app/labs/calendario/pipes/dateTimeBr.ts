import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateTimeBr'
})
export class DateTimeBrPipe implements PipeTransform {
  transform(value): any {
    if (!value || (typeof value !== 'string')) {
      return '';
    }

    let date = value.substring(0,10).split('-');
    let dateFinal = date[2] + '/' + date[1] + '/' + date[0];
    let time = value.substring(11,16);

    return dateFinal + ' ' + time;
  }
}
