import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { OnboardingParallaxPageRoutingModule } from './onboarding-parallax-routing.module';
import { OnboardingParallaxPage } from './onboarding-parallax.page';
import { SwiperModule } from 'ngx-swiper-wrapper';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OnboardingParallaxPageRoutingModule,
    SwiperModule
  ],
  declarations: [OnboardingParallaxPage]
})
export class OnboardingParallaxPageModule {}
