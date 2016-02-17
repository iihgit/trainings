(function () {


    'use strict';


    angular
        .module('app', [

                'app.core',
                'app.nav',
                'app.list',
                'app.details'
    ])
        .config(configFunction);

    configFunction.$inject = ['$routeProvider'];

    function configFunction($routeProvider) {
        $routeProvider.otherwise({
            redirectTo: '/trainings'
        });
    }

    //phonecatApp.config(['$routeProvider',
    //    function ($routeProvider) {
    //        $routeProvider.
    //        when('/trainings', {
    //            templateUrl: 'pages/trainings-list.html',
    //            controller: 'PhoneListCtrl'
    //        }).
    //        when('/trainings/:id', {
    //            templateUrl: 'pages/details.html',
    //            controller: 'TrainingDetailsCtrl'
    //        }).
    //        when('/trainings/:id/:id', {
    //            templateUrl: 'pages/termin.html',
    //            controller: 'TrainingDetailsCtrl'
    //        }).
    //        otherwise({
    //            redirectTo: '/trainings'
    //        });
    //    }]);

})();
