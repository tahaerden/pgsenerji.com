import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LightingServicesRoutingModule } from './lighting-services-routing.module';
import { LightingServicesComponent } from './lighting-services.component';


@NgModule({
  declarations: [
    LightingServicesComponent
  ],
  imports: [
    CommonModule,
    LightingServicesRoutingModule
  ]
})
export class LightingServicesModule { }
