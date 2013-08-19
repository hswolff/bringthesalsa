'use strict';

angular.module('BringTheSalsaApp')
  .controller('PartyCtrl', ['$scope', '$location', function($scope, $location) {
    $scope.shareUrl = $location.absUrl();
    // $scope.shareUrl = 'http://developers.facebook.com/docs/reference/plugins/like';
  }]);
