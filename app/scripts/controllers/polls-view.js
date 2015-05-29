'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:PollsViewCtrl
 * @description
 * # PollsViewCtrl
 * Controller of the clientApp
 */
 angular.module('clientApp')
 .controller('PollsViewCtrl', function ($scope, Polls, $routeParams, $http, $location) {

    $scope.viewPoll = true;
    $scope.poll = {};

    Polls.one($routeParams.id).get().then(function(poll) {
        $scope.poll = poll;

    // Add status
    var arrayLength = $scope.poll.answers.length;
    for (var i = 0; i < arrayLength; i++) {
        console.log($scope.poll.answers[i]);
        $scope.poll.answers[i].status = false;
    }

});

    $scope.vote = function() {
        console.log("Voting");
        var arrayLength = $scope.poll.answers.length;
        for (var i = 0; i < arrayLength; i++) {
            if ($scope.poll.answers[i].status === true) {
                $scope.poll.answers[i].votes += 1;
        }
    }

    $scope.poll.save().then(function() {
        $location.path('/poll/' + $routeParams.id + '/results');
    });

    };




});
