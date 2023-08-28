import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompensationSystemsRoutingModule } from './compensation-systems-routing.module';
import { CompensationSystemsComponent } from './compensation-systems.component';


@NgModule({
  declarations: [
    CompensationSystemsComponent
  ],
  imports: [
    CommonModule,
    CompensationSystemsRoutingModule
  ]
})
export class CompensationSystemsModule { }
