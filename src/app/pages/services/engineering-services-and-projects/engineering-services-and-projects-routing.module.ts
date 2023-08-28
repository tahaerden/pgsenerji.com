import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EngineeringServicesAndProjectsComponent } from './engineering-services-and-projects.component';

const routes: Routes = [{ path: '', component: EngineeringServicesAndProjectsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EngineeringServicesAndProjectsRoutingModule { }
