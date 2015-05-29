'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:PollsResultCtrl
 * @description
 * # PollsResultCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('PollsResultCtrl', function ($scope, Polls, $routeParams) {

    $scope.viewPoll = true;
    $scope.poll = {};

    Polls.one($routeParams.id).get().then(function(poll) {
        $scope.poll = poll;
    });

  });
