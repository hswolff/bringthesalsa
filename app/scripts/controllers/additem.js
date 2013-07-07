'use strict';

angular.module('BringTheSalsaApp')
  .controller('AddItemCtrl', function ($scope, Items, $routeParams) {
    $scope.addItem = function (newItem) {
      if (!newItem) {
        return;
      }
      Items.add(newItem);
      $scope.newItem = '';
    };
    $scope.createNewList = function() {
      console.log('bob');
    };
    $scope.$on('$routeChangeSuccess', function() {
      $scope.viewingList = $routeParams.partyId;
    });
  });
