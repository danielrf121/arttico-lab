import { NgModule } from '@angular/core';
import { CardLabComponent } from './card-lab.component';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [IonicModule, CommonModule],
  exports: [CardLabComponent],
  declarations: [CardLabComponent]
})
export class CardLabComponentModule {}
