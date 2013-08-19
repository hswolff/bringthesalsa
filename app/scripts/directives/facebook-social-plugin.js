/* global FB */
'use strict';

angular.module('BringTheSalsaApp')
  .directive('facebookSocialPlugin', function() {
    return {
      restrict: 'A',
      link: function(scope, element) {
        FB.XFBML.parse(element[0]);
      }
    };
  });
