var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListCtrl', function ($scope, $http) {

    $http.get('trainings.json').success(function(data) {
    $scope.trainings = data;
  });

    $scope.order = 'age';
});
