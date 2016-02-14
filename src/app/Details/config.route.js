(function () {
    'use strict';

    angular
        .module('app.details')
        .config(configFunction);

    configFunction.$inject = ['$routeProvider'];

    function configFunction($routeProvider) {

        $routeProvider.when('/trainings/:id', {
            templateUrl: 'app/Details/details.html',
            controller: 'detailsController',
            controllerAs: 'vm'
        })
    }

})();
