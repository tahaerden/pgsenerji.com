import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { TranslateModule } from '@ngx-translate/core';
const modules = [TranslateModule.forChild()];

@NgModule({
  declarations: [],
  imports: [modules],
  exports: [modules],
  providers: []
  // schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule {}
