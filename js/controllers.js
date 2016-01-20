var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('PhoneListCtrl', ['$scope', '$http',
function ($scope, $http) {
        $http.get('trainings/trainings.json').success(function (data) {
            $scope.trainings = data;
        });

        $scope.order = 'titel';
}]);

phonecatControllers.controller('TrainingDetailsCtrl', ['$scope', '$routeParams', '$http',
    function ($scope, $routeParams, $http) {
        $http.get('trainings/' + $routeParams.id + '.json').success(function (data) {
            $scope.trainingDetails = data;
        });
    }]);
