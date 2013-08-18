'use strict';

angular.module('BringTheSalsaApp')
  .controller('ItemsListCtrl', function ($scope, Items) {
    $scope.model = {
      Items: Items
    };

    $scope.remove = function(i) {
      if (window.confirm('Remove ' + Items.models[i].what + '?')) {
        Items.remove(i);
      }
    };

    $scope.edit = function (property) {
      if (Items.models[this.$index].currentlyEditing) {
        Items.models[this.$index].currentlyEditing = '';
        Items.save(Items.models[this.$index]);
      } else {
        Items.models[this.$index].currentlyEditing = property;
      }
    };

    $scope.editing = function (property) {
      var editing = Items.models[this.$index].currentlyEditing;
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
