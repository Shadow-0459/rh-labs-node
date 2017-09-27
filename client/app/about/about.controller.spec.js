/*global describe, beforeEach, inject, it, expect, module*/

describe('Controller: AboutCtrl', function () {
    'use strict';

    var AboutCtrl, scope;
    // load the controller's module
    beforeEach(module('rhlabsangularApp'));

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        AboutCtrl = $controller('AboutCtrl', {
            $scope: scope
        });
    }));

    it('should ...', function () {
        expect(1).toEqual(1);
    });
});
