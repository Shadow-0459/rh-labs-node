/*global describe, beforeEach, inject, it, expect, module*/

describe('Controller: MainCtrl', function () {
    'use strict';

    var MainCtrl, scope;

    // load the controller's module
    beforeEach(module('rhlabsangularApp'));

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        MainCtrl = $controller('MainCtrl', {
            $scope: scope
        });
    }));

    it('should ...', function () {
        expect(1).toEqual(1);
    });
});
