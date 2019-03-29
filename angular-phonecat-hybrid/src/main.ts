import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import './app-ajs';

import { UpgradeModule } from '@angular/upgrade/static';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then((platformRef) => {
    // Use the upgrade module to bootstrap the hybrid
    // const upgrade = platformRef.injector.get(UpgradeModule) as UpgradeModule;
    // upgrade.bootstrap(document.documentElement, ['phonecatApp']);
  })
  .catch((err) => console.log(err));
