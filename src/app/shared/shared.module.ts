import { NgModule } from '@angular/core';

import { TranslateModule } from '@ngx-translate/core';
import { BannerComponent } from './components/banner/banner.component';
import { CommonModule } from '@angular/common';
import { CdkMenuModule } from '@angular/cdk/menu';
import { DialogModule } from '@angular/cdk/dialog';
const modules = [CommonModule, TranslateModule.forChild(), CdkMenuModule, DialogModule];
// const pipes = [];

@NgModule({
  declarations: [BannerComponent, BannerComponent],
  imports: [modules],
  exports: [modules, BannerComponent],
  providers: []
})
export class SharedModule {}
