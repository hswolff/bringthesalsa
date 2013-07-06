'use strict';

angular.module('BringTheSalsaApp')
  .controller('MainCtrl', function ($scope, Items) {
    $scope.Items = Items;

    $scope.types = ['drink', 'snack'];
    $scope.quantity = [0,1,2,3,4,5,6,7,8,9];
    $scope.people = ['Joel', 'Bob', 'Howdy', 'Bill'];

    $scope.$watch('items', function() {
      Items.save();
    }, true);
  });
