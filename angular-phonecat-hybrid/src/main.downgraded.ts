import * as angular from 'angular';

import './app-ajs';

import { AppComponent } from './app/app.component';
import { enableProdMode, StaticProvider } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {
  downgradeComponent,
  downgradeModule,
  setAngularLib,
} from '@angular/upgrade/static';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

const mainModule = angular.module('phonecatApp');

function bootstrapAngular(extra: StaticProvider[]): any {
  setAngularLib(angular);

  if (environment.production) {
    enableProdMode();
  }

  return platformBrowserDynamic(extra)
    .bootstrapModule(AppModule)
    .catch((err) => console.log(err));
}

const downgradedModule = angular
  .module('downgraded', [downgradeModule(bootstrapAngular)])
  .directive('appRoot', downgradeComponent({ component: AppComponent }));

angular.bootstrap(document.body, [mainModule.name, downgradedModule.name], {
  strictDi: true,
});
