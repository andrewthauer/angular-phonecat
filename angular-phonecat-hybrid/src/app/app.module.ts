import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import {
  UpgradeModule,
  setAngularJSGlobal,
  downgradeComponent,
} from '@angular/upgrade/static';

import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core';
import { AppUpgradeModule } from './upgrade/app-upgrade.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PhoneListComponent } from './phone-list/phone-list.component';

import * as angular from 'angular';
// angular
//   .module('phonecatApp')
//   .directive('appRoot', downgradeComponent({ component: AppComponent }));

@NgModule({
  imports: [
    BrowserModule,
    UpgradeModule,
    HttpClientModule,
    FormsModule,
    AppUpgradeModule,
    CoreModule,
    SharedModule,
    AppRoutingModule,
  ],
  declarations: [AppComponent, PhoneListComponent],
  entryComponents: [AppComponent],
  // bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private upgrade: UpgradeModule) {}

  ngDoBootstrap(app) {
    setAngularJSGlobal(angular);
    this.upgrade.bootstrap(document.body, ['phonecatApp'], { strictDi: true });
    app.bootstrap(AppComponent);
  }
}
