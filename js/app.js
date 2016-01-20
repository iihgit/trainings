'use strict';


var phonecatApp = angular.module('phonecatApp', [
    'ngRoute',
    'phonecatControllers'
]);

phonecatApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
        when('/trainings', {
            templateUrl: 'trainings-list.html',
            controller: 'PhoneListCtrl'
        }).
        when('/trainings/:id', {
            templateUrl: 'details.html',
            controller: 'TrainingDetailsCtrl'
        }).
        otherwise({
            redirectTo: '/trainings'
        });
    }]);
