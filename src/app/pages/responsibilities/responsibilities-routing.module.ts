import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResponsibilitiesComponent } from './responsibilities.component';

const routes: Routes = [{ path: '', component: ResponsibilitiesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResponsibilitiesRoutingModule { }
