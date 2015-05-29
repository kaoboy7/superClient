'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:PollsAddCtrl
 * @description
 * # PollsAddCtrl
 * Controller of the clientApp
 */
 angular.module('clientApp')
 .controller('PollsAddCtrl', function ($scope, Polls, $location) {

    $scope.poll = {};

    $scope.poll.answers = [{answer: ""}, {answer: ""}];

    $scope.addNewAnswer = function() {
        $scope.poll.answers.push({});
    };

    $scope.removeAnswer = function(answer) {
        var i = $scope.poll.answers.indexOf(answer);
        if (i != -1) {
            $scope.poll.answers.splice(i, 1);
        }
    };

    $scope.savePoll = function() {
        if (!!$scope.poll) {
            console.log(JSON.stringify($scope.poll));

            Polls.post($scope.poll).then(function() {
                $location.path('/polls');
            });
        }
    };

});
