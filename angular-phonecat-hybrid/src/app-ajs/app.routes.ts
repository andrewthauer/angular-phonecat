import * as angular from 'angular';

export default class AppRoutes {
  constructor($stateProvider) {
    const phoneListState = {
      name: 'phones',
      url: '/phones',
      component: 'phoneList',
    };

    const phoneDetailState = {
      name: 'phoneDetail',
      url: '/phones/{phoneId}',
      component: 'phoneDetail',
      // resolve: {
      //   phoneId: ($stateParams) => $stateParams.phoneId,
      // },
    };

    $stateProvider.state(phoneListState);
    $stateProvider.state(phoneDetailState);
  }
}

// angular

export const createAppRoutes = [
  '$stateProvider',
  ($stateProvider) => new AppRoutes($stateProvider),
];

// import * as angular from 'angular';

// angular.module('phonecatApp').config(createAppRoutes);
