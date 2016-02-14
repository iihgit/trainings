(function () {
    'use strict';

    angular
        .module('app.details')
        .controller('detailsController', detailsController);

    detailsController.$inject = ['$routeParams', 'listService']

    function detailsController($routeParams, listService) {
        var vm = this;

        vm.trainingDetails = listService.get({
            id: $routeParams.id
        });
    }
})();
