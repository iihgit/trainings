var phonecatService = angular.module('phonecatService', ['ngResource']);

phonecatService.factory('TrainingSer', ['$resource',
    function ($resource) {
        return $resource('trainings/:id.json', {}, {
            query: {
                method: 'GET',
                params: {
                    id: 'trainings'
                },
                isArray: true
            }
        });
}]);

phonecatService.factory('TerminService',
    function ($resource) {
        return $resource('trainings/termine.json')
    });
