import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlcSystemsRoutingModule } from './plc-systems-routing.module';
import { PlcSystemsComponent } from './plc-systems.component';


@NgModule({
  declarations: [
    PlcSystemsComponent
  ],
  imports: [
    CommonModule,
    PlcSystemsRoutingModule
  ]
})
export class PlcSystemsModule { }
