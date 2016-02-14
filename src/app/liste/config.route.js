(function () {
    'use strict';

    angular
        .module('app.list')
        .config(configFunction);

    configFunction.$inject = ['$routeProvider'];

    function configFunction($routeProvider) {
        $routeProvider.when('/trainings', {
            templateUrl: 'app/liste/trainings-list.html',
            controller: 'listenController',
            controllerAs: 'vm'
        });
    }

})();
