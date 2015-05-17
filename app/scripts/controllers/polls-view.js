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
    $scope.formData = {test: "asdf"};
    console.log("Testing hello world");
    console.log("$routeParams.id=" + $routeParams.id);

    Polls.one($routeParams.id).get().then(function(poll) {
        $scope.poll = poll;

    // Add status
    var arrayLength = $scope.poll.answers.length;
    for (var i = 0; i < arrayLength; i++) {
        console.log($scope.poll.answers[i]);
        $scope.poll.answers[i].status = false;
    }

    console.log("TEST1");
    console.log(JSON.stringify($scope.poll));
    console.log("TEST2");
    console.log($scope.poll.question);
    console.log("TEST3");

});

    $scope.vote = function() {
        console.log("Voting");
        var arrayLength = $scope.poll.answers.length;
        for (var i = 0; i < arrayLength; i++) {
            if ($scope.poll.answers[i].status === true) {
                $scope.poll.answers[i].votes += 1;



                // var path = "/polls/" + $scope.poll._id + "/answers/" 
                // + $scope.poll.answers[i]._id + "/upvote";
                // $http.put("http://localhost:3000" + path).
                //     success(function(data, status, headers, config) {

                //     }).
                //     error(function(data, status, headers, config) {
                //         console.log("Error");
                //     });


                // console.log("path:" + path);
            // send http put request to path
        }
    }


    $scope.poll.save().then(function() {
        $location.path('/poll/' + $routeParams.id + '/results');
    });


    // Polls.put($scope.poll).then(function() {



    //     $location.path('/polls');
    // });
        // $scope.poll.answers.push({});

        // :poll/answers/:answer/upvote
    };




});
