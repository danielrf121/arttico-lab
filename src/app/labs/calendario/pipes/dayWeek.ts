import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dayWeek'
})
export class DayWeekPipe implements PipeTransform {
  transform(value): any {
    let date = new Date(value);
    let week = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];

    value = week[date.getDay()];
    return value;
  }
}
