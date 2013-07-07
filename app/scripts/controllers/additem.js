'use strict';

angular.module('BringTheSalsaApp')
  .controller('AddItemCtrl', function ($scope, Items, $routeParams, $location, urlPrefix) {
    $scope.addItem = function (newItem) {
      if (!newItem) {
        return;
      }
      Items.add(newItem);
      $scope.newItem = '';
    };
    $scope.createNewList = function() {
      var listName = Items.createCollection();
      $location.path(urlPrefix + listName);
    };
    $scope.$on('$routeChangeSuccess', function() {
      $scope.viewingList = $routeParams.partyId;
    });
  });
