import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OgFacilitiesRoutingModule } from './og-facilities-routing.module';
import { OgFacilitiesComponent } from './og-facilities.component';


@NgModule({
  declarations: [
    OgFacilitiesComponent
  ],
  imports: [
    CommonModule,
    OgFacilitiesRoutingModule
  ]
})
export class OgFacilitiesModule { }
