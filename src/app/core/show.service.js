(function () {
    'use strict';

    angular
        .module('app.core')
        .factory('showService', showService);

    function showService() {

        var service = {
            obj: {
                isVisible: true
            }
        };
        return service;

    }
})();
