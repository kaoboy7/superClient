'use strict';

describe('Controller: PollDeleteCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var PollDeleteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PollDeleteCtrl = $controller('PollDeleteCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
