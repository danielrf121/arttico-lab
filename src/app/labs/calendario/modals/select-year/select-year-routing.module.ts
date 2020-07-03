import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectYearPage } from './select-year.page';

const routes: Routes = [
  {
    path: '',
    component: SelectYearPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectYearPageRoutingModule {}
