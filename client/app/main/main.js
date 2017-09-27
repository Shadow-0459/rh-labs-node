/*global angular*/

angular.module('rhlabsangularApp').config(function ($stateProvider) {
    'use strict';
    $stateProvider.state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
    });
});
