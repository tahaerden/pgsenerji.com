import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SolutionPartnersComponent } from './solution-partners.component';

const routes: Routes = [{ path: '', component: SolutionPartnersComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SolutionPartnersRoutingModule { }
