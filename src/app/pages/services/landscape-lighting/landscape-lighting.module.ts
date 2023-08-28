import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandscapeLightingRoutingModule } from './landscape-lighting-routing.module';
import { LandscapeLightingComponent } from './landscape-lighting.component';


@NgModule({
  declarations: [
    LandscapeLightingComponent
  ],
  imports: [
    CommonModule,
    LandscapeLightingRoutingModule
  ]
})
export class LandscapeLightingModule { }
