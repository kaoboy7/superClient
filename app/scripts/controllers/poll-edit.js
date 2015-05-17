'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:PollEditCtrl
 * @description
 * # PollEditCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('PollEditCtrl', function ($scope, Polls, $routeParams, $location) {
    $scope.editPoll = true;
    $scope.poll = {};
    Polls.one($routeParams.id).get().then(function(poll) {
        $scope.poll = poll;
        $scope.savePoll = function() {
            $scope.poll.save().then(function() {
                $location.path('/poll/' + $routeParams.id);
            });
        }
    });
  });
