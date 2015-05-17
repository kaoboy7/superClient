'use strict';

describe('Controller: PollEditCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var PollEditCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PollEditCtrl = $controller('PollEditCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
