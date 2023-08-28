import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlcSystemsComponent } from './plc-systems.component';

const routes: Routes = [{ path: '', component: PlcSystemsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlcSystemsRoutingModule { }
