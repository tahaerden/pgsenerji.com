import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel.component';
import { SafePipe } from 'src/app/core/pipes/safe.pipe';
import { SharedModule } from '../../shared.module';

@NgModule({
  declarations: [CarouselComponent],
  imports: [CommonModule, SharedModule],
  exports: [CarouselComponent],
  providers: [SafePipe]
})
export class CarouselModule {}
