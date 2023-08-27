import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResponsibilitiesRoutingModule } from './responsibilities-routing.module';
import { ResponsibilitiesComponent } from './responsibilities.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ResponsibilitiesComponent],
  imports: [CommonModule, ResponsibilitiesRoutingModule, SharedModule]
})
export class ResponsibilitiesModule {}
