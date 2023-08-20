import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SolutionPartnersRoutingModule } from './solution-partners-routing.module';
import { SolutionPartnersComponent } from './solution-partners.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [SolutionPartnersComponent],
  imports: [CommonModule, SolutionPartnersRoutingModule, SharedModule]
})
export class SolutionPartnersModule {}
