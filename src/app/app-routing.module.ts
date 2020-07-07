import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'onboarding-parallax-bichorama',
    loadChildren: () => import('./labs/onboarding-parallax/onboarding-parallax.module').then( m => m.OnboardingParallaxPageModule)
  },
  {
    path: 'calendario',
    loadChildren: () => import('./labs/calendario/calendario/calendario.module').then( m => m.CalendarioPageModule)
  },
  {
    path: 'scroll-profile',
    loadChildren: () => import('./labs/scroll-profile/scroll-profile.module').then( m => m.ScrollProfilePageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
