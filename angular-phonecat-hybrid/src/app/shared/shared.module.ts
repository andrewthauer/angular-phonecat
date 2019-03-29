import { NgModule } from '@angular/core';

import { TitleComponent } from './title.component';

const components = [TitleComponent];

@NgModule({
  imports: [],
  providers: [],
  declarations: [...components],
  exports: [...components],
})
export class SharedModule {}
