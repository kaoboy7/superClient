'use strict';

describe('Controller: PollsCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var PollsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PollsCtrl = $controller('PollsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
