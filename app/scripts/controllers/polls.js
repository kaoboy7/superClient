'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:PollsCtrl
 * @description
 * # PollsCtrl
 * Controller of the clientApp
 */
 angular.module('clientApp')
 .controller('PollsCtrl', function ($scope, Polls) {

    $scope.polls = Polls.getList().$object;

    console.log($scope.polls);

 });
