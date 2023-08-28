import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandscapeLightingComponent } from './landscape-lighting.component';

const routes: Routes = [{ path: '', component: LandscapeLightingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandscapeLightingRoutingModule { }
