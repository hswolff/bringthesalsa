'use strict';

describe('Directive: facebookSocialPlugin', function () {
  beforeEach(module('BringTheSalsaApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<facebook-social-plugin></facebook-social-plugin>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the facebookSocialPlugin directive');
  }));
});
