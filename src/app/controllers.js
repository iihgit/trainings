var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('PhoneListCtrl', ['$scope', 'TrainingSer',
function ($scope, TrainingSer) {
        $scope.trainings = TrainingSer.query();
        $scope.order = 'titel';
}]);

phonecatControllers.controller('TrainingDetailsCtrl', ['$scope', '$routeParams', 'TrainingSer', 'TerminService',
    function ($scope, $routeParams, TrainingSer, TerminService, $timeout, $modal) {
        $scope.trainingDetails = TrainingSer.get({
            id: $routeParams.id
        });
        $scope.termine = TerminService.query();


        $scope.groups = [
            {
                title: 'Dynamic Group Header - 1',
                content: 'Dynamic Group Body - 1'
    },
            {
                title: 'Dynamic Group Header - 2',
                content: 'Dynamic Group Body - 2'
    }
  ];

        $scope.status = {
            isFirstOpen: true,
            isFirstDisabled: false
        };
        $scope.isCollapsed = false;
    }]);
