'use strict';

angular.module('BringTheSalsaApp')
  .controller('MainCtrl', function ($scope, Items, $routeParams) {
    var partyId = $routeParams.partyId;
    if (partyId) {
      Items.createFirebase(partyId);
    } else {
      Items.reset();
    }

    $scope.Items = Items;

    $scope.remove = function(i) {
      if (window.confirm('Remove ' + $scope.Items.models[i].what + '?')) {
        Items.remove(i);
      }
    };

    $scope.edit = function (property) {
      if ($scope.Items.models[this.$index].currentlyEditing) {
        $scope.Items.models[this.$index].currentlyEditing = '';
        $scope.Items.save($scope.Items.models[this.$index]);
      } else {
        $scope.Items.models[this.$index].currentlyEditing = property;
      }
    };

    $scope.editing = function (property) {
      var editing = $scope.Items.models[this.$index].currentlyEditing;
      return editing === 'all' || editing === property || (editing && property === 'any');
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
  });
