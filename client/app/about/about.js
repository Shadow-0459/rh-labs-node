/*global angular*/

angular.module('rhlabsangularApp').config(function ($stateProvider) {
    'use strict';
    $stateProvider.state('about', {
        templateUrl: 'app/about/about.html',
        controller: 'AboutCtrl'
    });
});
