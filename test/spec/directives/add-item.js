'use strict';

describe('Directive: addItem', function () {
  beforeEach(module('BringTheSalsaApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<add-item></add-item>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the addItem directive');
  }));
});
