(function () {
    'use strict';
    angular
        .module('app.nav')
        .directive('navbarDirective', navbarDirective)

    function navbarDirective() {

        return {
            templateUrl: 'app/Navigation/navbar.html',
            restrict: 'E',
            scope: {},
            controller: navController,
            controllerAs: 'vm',
        };
    }

    navController.$inject = ['showService']

    function navController(showService) {
        var vm = this;

        vm.data = showService.obj;

    }

})();
