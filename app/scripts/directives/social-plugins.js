/* global FB, twttr */
'use strict';

angular.module('BringTheSalsaApp')
  .directive('socialPlugins', ['$timeout', function($timeout) {
    return {
      restrict: 'A',
      link: function(scope, element) {
        $timeout(function() {
          FB.XFBML.parse(element[0]);
          twttr.widgets.load(element[0]);
        });
      }
    };
  }]);
