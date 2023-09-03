import { NgModule } from '@angular/core';

import { TranslateModule } from '@ngx-translate/core';
import { BannerComponent } from './components/banner/banner.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../core/components/footer/footer.component';
import { CdkMenuModule } from '@angular/cdk/menu';
const modules = [CommonModule, TranslateModule.forChild(), CdkMenuModule];
// const pipes = [];

@NgModule({
  declarations: [BannerComponent, BannerComponent, FooterComponent],
  imports: [modules],
  exports: [modules, BannerComponent, FooterComponent],
  providers: []
})
export class SharedModule {}
