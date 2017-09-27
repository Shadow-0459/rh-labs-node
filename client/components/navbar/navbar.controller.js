/*global angular*/

angular.module('rhlabsangularApp').controller('NavbarCtrl', function ($scope, $state) {
    'use strict';
    $scope.menu = [
        {
            'title': 'Home',
            'link': 'main'
        },
        {
            'title': 'About',
            'link': 'about'
        }
    ];

    $scope.isActive = function (route) {
        return $state.is(route);
    };
});
