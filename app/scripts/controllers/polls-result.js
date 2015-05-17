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


    console.log("Testing hello world");
    console.log("$routeParams.id=" + $routeParams.id);


    $scope.viewPoll = true;
    $scope.poll = {};

    Polls.one($routeParams.id).get().then(function(poll) {
        $scope.poll = poll;

        console.log("TEST1");
    console.log(JSON.stringify($scope.poll));
    console.log("TEST2");
    console.log($scope.poll.question);
    console.log("TEST3");

    });

  });
