import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScrollProfilePage } from './scroll-profile.page';

const routes: Routes = [
  {
    path: '',
    component: ScrollProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScrollProfilePageRoutingModule {}
