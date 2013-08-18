'use strict';

angular.module('BringTheSalsaApp')
  .controller('AddItemCtrl', function($scope, Items) {
    $scope.addItem = function (newItem) {
      if (!newItem) {
        return;
      }
      Items.add(newItem);
      $scope.newItem = '';
    };
  });
