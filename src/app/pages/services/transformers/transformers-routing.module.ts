import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransformersComponent } from './transformers.component';

const routes: Routes = [{ path: '', component: TransformersComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransformersRoutingModule { }
