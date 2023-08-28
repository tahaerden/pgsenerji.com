import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LightingServicesComponent } from './lighting-services.component';

const routes: Routes = [{ path: '', component: LightingServicesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LightingServicesRoutingModule { }
