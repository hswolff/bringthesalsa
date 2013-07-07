'use strict';

describe('Directive: ngEnter', function () {
  beforeEach(module('BringTheSalsaApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<ng-enter></ng-enter>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the ngEnter directive');
  }));
});
