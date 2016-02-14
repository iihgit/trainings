(function () {
    'use strict';

    angular
        .module('app.list')
        .controller('listenController', listenController);

    listenController.$inject = ['listService'];

    function listenController(listService) {
        var vm = this;


        vm.trainings = listService.query();
        vm.order = 'titel';
    }
})();
