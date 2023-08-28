import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LightningRodAndGroundingRoutingModule } from './lightning-rod-and-grounding-routing.module';
import { LightningRodAndGroundingComponent } from './lightning-rod-and-grounding.component';


@NgModule({
  declarations: [
    LightningRodAndGroundingComponent
  ],
  imports: [
    CommonModule,
    LightningRodAndGroundingRoutingModule
  ]
})
export class LightningRodAndGroundingModule { }
