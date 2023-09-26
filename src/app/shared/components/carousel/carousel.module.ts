import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel.component';
import { SafePipe } from 'src/app/core/pipes/safe.pipe';
import { SharedModule } from '../../shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CarouselComponent],
  imports: [CommonModule, SharedModule, RouterModule],
  exports: [CarouselComponent],
  providers: [SafePipe]
})
export class CarouselModule {}
