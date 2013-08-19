'use strict';

describe('Controller: PartyCtrl', function () {

  // load the controller's module
  beforeEach(module('BringTheSalsaApp'));

  var PartyCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PartyCtrl = $controller('PartyCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
