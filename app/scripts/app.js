'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
angular
  .module('clientApp', [
    'ngRoute', 'restangular'
  ])
  .config(function ($routeProvider, RestangularProvider) {

    // RestangularProvider.setBaseUrl('http://localhost:3000');

    RestangularProvider.setBaseUrl('https://pacific-journey-4451.herokuapp.com');


    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/polls', {
        templateUrl: 'views/polls.html',
        controller: 'PollsCtrl'
      })
      .when('/create/poll', {
        templateUrl: 'views/polls-add.html',
        controller: 'PollsAddCtrl'
      })
      .when('/poll/:id', {
        templateUrl: 'views/polls-view.html',
        controller: 'PollsViewCtrl'
      })
      .when('/poll/:id/delete', {
        templateUrl: 'views/poll-delete.html',
        controller: 'PollDeleteCtrl'
      })
      .when('/poll/:id/edit', {
        templateUrl: 'views/poll-edit.html',
        controller: 'PollEditCtrl'
      })
      .when('/poll/:id/results', {
        templateUrl: 'views/polls-result.html',
        controller: 'PollsResultCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })

  .factory('PollsRestangular', function(Restangular) {
    return Restangular.withConfig(function(RestangularConfigurer) {
      RestangularConfigurer.setRestangularFields({
        id: '_id'
      });

    });

  })

  .factory('Polls', function(PollsRestangular) {
    return PollsRestangular.service('polls');
  })

  ;
