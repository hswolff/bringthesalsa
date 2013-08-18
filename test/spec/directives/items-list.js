'use strict';

describe('Directive: itemsList', function () {
  beforeEach(module('BringTheSalsaApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<items-list></items-list>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the itemsList directive');
  }));
});
