import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OgFacilitiesComponent } from './og-facilities.component';

const routes: Routes = [{ path: '', component: OgFacilitiesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OgFacilitiesRoutingModule { }
