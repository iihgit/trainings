(function () {
    'use strict';

    angular
        .module('app.core')
        .factory('listService', listService);

    listService.$inject = ['$resource'];

    function listService($resource) {

        return $resource('app/core/:id.json', {}, {
            query: {
                method: 'GET',
                params: {
                    id: 'trainings'
                },
                isArray: true
            }
        });
    };


})();
