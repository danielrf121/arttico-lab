import { NgModule } from '@angular/core';
import { DateBrPipe } from '../pipes/dateBr';
import { DateTimeBrPipe } from '../pipes/dateTimeBr';
import { DayMonthPipe } from '../pipes/dayMonth';
import { DayWeekPipe } from '../pipes/dayWeek';
import { DayPipe } from '../pipes/day';
import { MonthPipe } from '../pipes/month';

@NgModule({
  declarations: [
    DateBrPipe,
    DateTimeBrPipe,
    DayMonthPipe,
    DayWeekPipe,
    DayPipe,
    MonthPipe,
  ],
  exports: [
    DateBrPipe,
    DateTimeBrPipe,
    DayMonthPipe,
    DayWeekPipe,
    DayPipe,
    MonthPipe,
  ]
})
export class PipesModule {}
