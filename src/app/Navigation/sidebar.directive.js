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
            scope: {
                sidebar: '&',
                state: '='
            },
            controller: 'sidebarController',
            controllerAs: 'vm'
        };
    }

    function sidebarController() {
        var vm = this;

        vm.state = false;

        vm.toggleState = toggleState;

        function toggleState() {
            vm.state = !vm.state;
        }

    }

})();
