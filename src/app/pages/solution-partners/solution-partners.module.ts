import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SolutionPartnersRoutingModule } from './solution-partners-routing.module';
import { SolutionPartnersComponent } from './solution-partners.component';


@NgModule({
  declarations: [
    SolutionPartnersComponent
  ],
  imports: [
    CommonModule,
    SolutionPartnersRoutingModule
  ]
})
export class SolutionPartnersModule { }
