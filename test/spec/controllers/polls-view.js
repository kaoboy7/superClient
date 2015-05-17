'use strict';

describe('Controller: PollsViewCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var PollsViewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PollsViewCtrl = $controller('PollsViewCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
