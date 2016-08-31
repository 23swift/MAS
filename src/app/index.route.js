(function() {
  'use strict';

  angular
    .module('mas')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'app/home/masHome.html',
        controller: 'masHomeController',
        controllerAs: 'home'
      })
       .state('na', {
        url: '/newAffiliation',
        templateUrl: 'app/newAffiliation/newAffiliation.html',
        controller: 'newAffiliationController',
        controllerAs: 'na'
      });

    $urlRouterProvider.otherwise('/home');
  }



})();
