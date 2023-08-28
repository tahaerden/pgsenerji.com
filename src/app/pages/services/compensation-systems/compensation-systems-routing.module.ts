import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompensationSystemsComponent } from './compensation-systems.component';

const routes: Routes = [{ path: '', component: CompensationSystemsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompensationSystemsRoutingModule { }
