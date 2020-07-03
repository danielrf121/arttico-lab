import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dayMonth'
})
export class DayMonthPipe implements PipeTransform {
  transform(value): any {
    let cut = value.substr(0, 10);
    let day = cut.split('-')[2];
    let month = cut.split('-')[1];
    let year = cut.split('-')[0];
    let finalDate = day + '-' + month + '-' + year;

    let date = new Date(finalDate);
    let monthsMin = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];

    value = date.getDate() + '/' + monthsMin[date.getMonth()];
    return value;
  }
}
