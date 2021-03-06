import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { VenuePage } from './venue.page';
import { VenueRoutingModule } from './venue-routing.module';

const routes: Routes = [
  {
    path: '',
    component: VenuePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VenueRoutingModule,
    RouterModule.forChild(routes)
  ],
  declarations: [VenuePage]
})
export class VenuePageModule {}
