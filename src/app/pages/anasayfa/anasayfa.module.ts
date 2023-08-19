import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnasayfaRoutingModule } from './anasayfa-routing.module';
import { AnasayfaComponent } from './anasayfa.component';
import { CarouselComponent } from 'src/app/shared/components/carousel/carousel.component';

@NgModule({
  declarations: [AnasayfaComponent, CarouselComponent],
  imports: [CommonModule, AnasayfaRoutingModule]
})
export class AnasayfaModule {}
