import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel.component';
import { SafePipe } from 'src/app/core/pipes/safe.pipe';

@NgModule({
  declarations: [CarouselComponent],
  imports: [CommonModule],
  exports: [CarouselComponent],
  providers: [SafePipe]
})
export class CarouselModule {}
