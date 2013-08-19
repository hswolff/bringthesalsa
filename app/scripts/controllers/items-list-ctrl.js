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
    $scope.makeSaveable = function(item) {
      item.needsToBeSaved = true;
    };
    $scope.save = function(item) {
      Items.save(item);
    };
  });
