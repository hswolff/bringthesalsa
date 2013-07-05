'use strict';

angular.module('BringTheSalsaApp')
  .controller('MainCtrl', function ($scope, Items) {
    $scope.items = Items.models;

    $scope.types = ['drink', 'snack'];
    $scope.quantity = [0,1,2,3,4,5,6,7,8,9];
    $scope.people = ['Joel', 'Bob', 'Howdy', 'Bill'];

    $scope.addItem = angular.bind(Items, Items.add);
    $scope.removeItem = angular.bind(Items, Items.remove);

    $scope.$watch('items', function() {
      Items.save();
    }, true);
  });
