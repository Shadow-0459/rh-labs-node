/*global angular*/

angular.module('rhlabsangularApp', [
    'ui.router',
    'ui.bootstrap'
]).config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    'use strict';
    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);
});
