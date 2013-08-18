'use strict';

angular.module('BringTheSalsaApp')
  .directive('itemsList', function () {
    return {
      templateUrl: 'views/items-list.html',
      restrict: 'E',
      controller: 'ItemsListCtrl'
    };
  });
