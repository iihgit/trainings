(function () {
    'use strict';

    angular
        .module('app.nav')
        .controller('sidebarController', sidebarController)
        .directive('sidebarDirective', sidebarDirective);


    function sidebarDirective() {
        return {
            templateUrl: 'app/Navigation/sidebar.html',
            restrict: 'E',
            scope: {},
            controller: 'sidebarController',
            controllerAs: 'vm'
        };
    }

    sidebarController.$inject = ['sidebarService'];

    function sidebarController(sidebarService) {
        var vm = this;

        vm.state = sidebarService.status;

        vm.toggleState = sidebarService.toggle;
    }

})();
