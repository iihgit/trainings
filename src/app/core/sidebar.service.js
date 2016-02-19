(function () {
    'use strict';

    angular
        .module('app.core')
        .factory('sidebarService', sidebarService);

    function sidebarService() {

        var state = {
            status: false,
            toggle: stateToogle
        }

        return state;

        function stateToogle() {
            state.status = !state.status;
        }
    }
})();
