'use strict';

var app = angular.module('BringTheSalsaApp', ['firebase']);
app.constant('urlPrefix', '/party/');
app.config(function ($routeProvider, urlPrefix) {
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
