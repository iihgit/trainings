(function () {
    'use strict';

    angular
        .module('app.nav')
        .controller('navbarController', navbarController)
        .directive('navbarDirective', navbarDirective);


    function navbarDirective() {
        return {
            templateUrl: 'app/Navigation/navbar.html',
            restrict: 'E',
            scope: {
                sidebar: '&',
                state: '='
            },
            controller: 'navbarController',
            controllerAs: 'vm'
        };
    }

    function navbarController() {
        var vm = this;

    }



})();
