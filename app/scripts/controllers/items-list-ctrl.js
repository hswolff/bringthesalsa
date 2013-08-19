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
    var throttle = function(fn, delay) {
      var timer = null;
      return function () {
        var context = this, args = arguments;
        clearTimeout(timer);
        timer = setTimeout(function () {
          fn.apply(context, args);
        }, delay);
      };
    };
    $scope.makeSaveable = function(item) {
      item.needsToBeSaved = true;
    };
    $scope.save = function(item) {
      Items.save(item);
    };
  });
