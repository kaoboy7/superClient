'use strict';

describe('Controller: PollsResultCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var PollsResultCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PollsResultCtrl = $controller('PollsResultCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
