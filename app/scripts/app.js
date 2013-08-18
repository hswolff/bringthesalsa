'use strict';

angular.module('BringTheSalsaApp', ['ngRoute', 'firebase'])
  .constant('urlPrefix', '/party/')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html'
      })
      .when('/party/:partyId', {
        templateUrl: 'views/party.html',
        controller: 'ItemsListCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .run(['$rootScope', '$location', 'Items', '$routeParams', 'urlPrefix',
    function($rootScope, $location, Items, $routeParams, urlPrefix){
    $rootScope.createNewList = function() {
      var listName = Items.createCollection();
      $location.path(urlPrefix + listName);
    };
    $rootScope.$on('$routeChangeSuccess', function() {
      $rootScope.viewingList = $routeParams.partyId;
    });
  }]);
