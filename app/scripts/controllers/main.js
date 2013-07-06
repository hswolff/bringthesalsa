'use strict';

angular.module('BringTheSalsaApp')
  .controller('MainCtrl', function ($scope, Items) {
    $scope.Items = Items;

    $scope.remove = function(i) {
      if (window.confirm('Remove ' + $scope.Items.models[i].what + '?')) {
        Items.remove(i);
      }
    };

    $scope.types = ['drink', 'snack'];
    var count = 0;
    $scope.quantity = [];
    while (count > -1) {
      $scope.quantity.push(count);
      if (++count > 10) {
        count = -1;
      }
    }
    $scope.people = ['Joel', 'Bob', 'Howdy', 'Bill'];

    $scope.$watch('Items.models', function() {
      Items.save();
    }, true);
  });
