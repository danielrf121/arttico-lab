import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HomePageRoutingModule } from './home-routing.module';
import { HomePage } from './home.page';
import { CardLabComponentModule } from '../../components/card-lab/card-lab.module';
import { ProfilePageModule } from '../modals/profile/profile.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    CardLabComponentModule,
    ProfilePageModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
