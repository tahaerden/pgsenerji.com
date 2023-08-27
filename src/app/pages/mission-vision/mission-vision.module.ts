import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MissionVisionRoutingModule } from './mission-vision-routing.module';
import { MissionVisionComponent } from './mission-vision.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [MissionVisionComponent],
  imports: [CommonModule, MissionVisionRoutingModule, SharedModule]
})
export class MissionVisionModule {}
