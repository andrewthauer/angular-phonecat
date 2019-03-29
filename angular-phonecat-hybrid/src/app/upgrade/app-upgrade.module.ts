import { NgModule } from '@angular/core';

import { phoneServiceProvider } from './upgraded-providers';
// import { PhoneListDirective, UiViewDirective } from './upgraded-directives';

const providers = [phoneServiceProvider];
// const directives = [PhoneListDirective, UiViewDirective];
const directives = [];

@NgModule({
  // imports: [UpgradeModule],
  providers: [...providers],
  declarations: [...directives],
  exports: [...directives],
})
export class AppUpgradeModule {}
