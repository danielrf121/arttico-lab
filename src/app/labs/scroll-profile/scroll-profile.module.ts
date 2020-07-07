import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScrollProfilePageRoutingModule } from './scroll-profile-routing.module';

import { ScrollProfilePage } from './scroll-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScrollProfilePageRoutingModule
  ],
  declarations: [ScrollProfilePage]
})
export class ScrollProfilePageModule {}
