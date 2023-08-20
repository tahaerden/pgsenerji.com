import { NgModule } from '@angular/core';

import { TranslateModule } from '@ngx-translate/core';
import { BannerComponent } from './components/banner/banner.component';
import { CommonModule } from '@angular/common';
const modules = [CommonModule, TranslateModule.forChild()];

@NgModule({
  declarations: [BannerComponent, BannerComponent],
  imports: [modules],
  exports: [modules, BannerComponent],
  providers: []
})
export class SharedModule {}
