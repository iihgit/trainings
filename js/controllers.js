var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('PhoneListCtrl', ['$scope', 'TrainingSer',
function ($scope, TrainingSer) {
        $scope.trainings = TrainingSer.query();
        $scope.order = 'titel';
}]);

phonecatControllers.controller('TrainingDetailsCtrl', ['$scope', '$routeParams', 'TrainingSer',
    function ($scope, $routeParams, TrainingSer) {
        $scope.trainingDetails = TrainingSer.get({
            id: $routeParams.id
        });
    }]);

phonecatControllers.controller('TerminCtrl', function ($scope, $routeParams, $http) {

    $scope.TID = $routeParams.TID;

    $http.get('/trainings/termine.json').success(function (data) {
        $scope.termine = data.filter(function (entry) {
            return entry.TID === $scope.TID
        })[0];
    });
});
