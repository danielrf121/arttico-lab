import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SelectYearPageRoutingModule } from './select-year-routing.module';
import { SelectYearPage } from './select-year.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectYearPageRoutingModule
  ],
  declarations: [SelectYearPage]
})
export class SelectYearPageModule {}
