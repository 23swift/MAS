(function() {
    'use strict';

    angular
        .module('mas')
        .directive('masList', directive);

    // directive.$inject = ['dependencies'];

    /* @ngInject */
    function directive() {
        // Usage:
        //
        // Creates:
        //
        var directive = ({
            bindToController: true,
            controller: Controller,
            controllerAs: 'na',
            templateUrl: '/app/newAffiliation/directives/midList.html',
            restrict: 'A'

        });
        return (directive);


    }

    /* @ngInject */
    function Controller() {
        var vm = this;
        vm.Contact = {
            "name": "Arnold",
            "address": "laguna"

        };

    }
})();
