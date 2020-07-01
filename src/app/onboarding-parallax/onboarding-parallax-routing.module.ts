import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OnboardingParallaxPage } from './onboarding-parallax.page';

const routes: Routes = [
  {
    path: '',
    component: OnboardingParallaxPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OnboardingParallaxPageRoutingModule {}
