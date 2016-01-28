'use strict';


var phonecatApp = angular.module('phonecatApp', [
    'ngRoute',
    'phonecatControllers',
    'phonecatService'
]);

phonecatApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
        when('/trainings', {
            templateUrl: 'pages/trainings-list.html',
            controller: 'PhoneListCtrl'
        }).
        when('/trainings/:id', {
            templateUrl: 'pages/details.html',
            controller: 'TrainingDetailsCtrl'
        }).
        when('/trainings/:id/:TID', {
            templateUrl: 'pages/termin.html',
            controller: 'TerminCtrl'
        }).
        otherwise({
            redirectTo: '/trainings'
        });
    }]);
