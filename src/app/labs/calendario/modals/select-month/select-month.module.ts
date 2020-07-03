import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SelectMonthPageRoutingModule } from './select-month-routing.module';
import { SelectMonthPage } from './select-month.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectMonthPageRoutingModule,
  ],
  declarations: [SelectMonthPage]
})
export class SelectMonthPageModule {}
