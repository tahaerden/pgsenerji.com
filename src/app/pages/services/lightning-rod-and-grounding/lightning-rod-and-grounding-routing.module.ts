import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LightningRodAndGroundingComponent } from './lightning-rod-and-grounding.component';

const routes: Routes = [{ path: '', component: LightningRodAndGroundingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LightningRodAndGroundingRoutingModule { }
