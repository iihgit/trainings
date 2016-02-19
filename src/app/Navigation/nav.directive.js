(function () {
    'use strict';

    angular
        .module('app.nav')
        .controller('navController', navController)
        .directive('navbarDirective', navbarDirective);


    function navbarDirective() {
        return {
            templateUrl: 'app/Navigation/navbar.html',
            restrict: 'E',
            scope: {
                sidebar: '&',
                state: '='
            },
            controller: 'navController',
            controllerAs: 'vm'
        };
    }

    navController.$inject = ['sidebarService'];

    function navController(sidebarService) {
        var vm = this;

        vm.state = sidebarService.status;

        vm.toggleState = sidebarService.toggle;
    }
})();
