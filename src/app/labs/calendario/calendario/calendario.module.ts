import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CalendarioPageRoutingModule } from './calendario-routing.module';
import { CalendarioPage } from './calendario.page';
import { CalendarComponentModule } from '../component/calendar/calendar.module';
import { CalendarPageModule } from '../modals/calendar/calendar.module';
import { PipesModule } from '../pipes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalendarioPageRoutingModule,
    CalendarComponentModule,
    CalendarPageModule,
    PipesModule
  ],
  declarations: [CalendarioPage]
})
export class CalendarioPageModule {}
