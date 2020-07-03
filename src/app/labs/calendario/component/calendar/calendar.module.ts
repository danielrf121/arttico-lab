import { NgModule } from '@angular/core';
import { CalendarComponent } from './calendar.component';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { PipesModule } from '../../pipes';
import { SelectYearPageModule } from '../../modals/select-year/select-year.module';
import { SelectMonthPageModule } from '../../modals/select-month/select-month.module';

@NgModule({
  imports: [IonicModule, CommonModule, PipesModule, SelectYearPageModule, SelectMonthPageModule],
  exports: [CalendarComponent],
  declarations: [CalendarComponent]
})
export class CalendarComponentModule {}
