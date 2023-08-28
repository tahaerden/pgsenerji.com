import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EngineeringServicesAndProjectsRoutingModule } from './engineering-services-and-projects-routing.module';
import { EngineeringServicesAndProjectsComponent } from './engineering-services-and-projects.component';


@NgModule({
  declarations: [
    EngineeringServicesAndProjectsComponent
  ],
  imports: [
    CommonModule,
    EngineeringServicesAndProjectsRoutingModule
  ]
})
export class EngineeringServicesAndProjectsModule { }
