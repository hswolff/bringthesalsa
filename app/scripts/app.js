'use strict';

angular.module('BringTheSalsaApp', ['ngRoute', 'firebase'])
  .constant('urlPrefix', '/party/')
  .config(function ($routeProvider, urlPrefix) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when(urlPrefix + ':partyId', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
