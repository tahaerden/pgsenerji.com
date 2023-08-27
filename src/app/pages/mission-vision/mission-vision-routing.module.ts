import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MissionVisionComponent } from './mission-vision.component';

const routes: Routes = [{ path: '', component: MissionVisionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MissionVisionRoutingModule { }
