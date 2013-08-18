'use strict';

angular.module('BringTheSalsaApp', ['ngRoute', 'firebase'])
  .constant('urlPrefix', '/party/')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'ItemsListCtrl'
      })
      .when('/party/demo', {
        templateUrl: 'views/main.html',
        controller: 'ItemsListCtrl'
      })
      .when('/party/:partyId', {
        templateUrl: 'views/main.html',
        controller: 'ItemsListCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
