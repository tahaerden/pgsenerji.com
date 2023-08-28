import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransformersRoutingModule } from './transformers-routing.module';
import { TransformersComponent } from './transformers.component';


@NgModule({
  declarations: [
    TransformersComponent
  ],
  imports: [
    CommonModule,
    TransformersRoutingModule
  ]
})
export class TransformersModule { }
