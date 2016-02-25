(function () {
    'use strict';

    angular
        .module('app.nav')
        .controller('navigationController', navigationController);

    navigationController.$inject = ['$scope', 'showService']

    function navigationController($scope, showService) {
        var vm = this;
        vm.data = showService.obj;

        vm.toggle = toggle;

        function toggle() {
            showService.obj.isVisible = !showService.obj.isVisible;
        }
    }
})();
