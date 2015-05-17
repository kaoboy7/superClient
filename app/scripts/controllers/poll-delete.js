'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:PollDeleteCtrl
 * @description
 * # PollDeleteCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('PollDeleteCtrl', function ($scope, Polls, $routeParams, $location) {
    $scope.poll = Polls.one($routeParams.id).get().$object;
    $scope.deletePoll = function() {
        $scope.poll.remove().then(function() {
            $location.path('/polls');
        });
    };

    $scope.back = function() {
        $location.path('/poll/' + $routeParams.id);
    };
  });
