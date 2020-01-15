import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListpanierPageRoutingModule } from './listpanier-routing.module';

import { ListpanierPage } from './listpanier.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListpanierPageRoutingModule
  ],
  declarations: [ListpanierPage]
})
export class ListpanierPageModule {}
