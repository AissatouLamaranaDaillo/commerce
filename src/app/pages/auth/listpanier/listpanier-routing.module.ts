import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListpanierPage } from './listpanier.page';

const routes: Routes = [
  {
    path: '',
    component: ListpanierPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListpanierPageRoutingModule {}
