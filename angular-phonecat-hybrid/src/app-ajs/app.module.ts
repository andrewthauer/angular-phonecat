import * as angular from 'angular';

import { createAppRoutes } from './app.routes';

angular.module('phonecatApp', [
  // 'ngAnimate',
  'ngRoute',
  'ui.router',
  'core',
  'phoneDetail',
  'phoneList',
]);
// .config(createAppRoutes);
