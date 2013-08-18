'use strict';

angular.module('BringTheSalsaApp')
  .directive('addItem', function () {
    return {
      templateUrl: 'views/add-item.html',
      restrict: 'E',
      controller: 'AddItemCtrl'
    };
  });
