var app = angular.module('seamlessmd', []);

const getName = function(data) {
    const name = data.name[0];
    return name.given[0] + " " + name.family[0]
}

app.controller('MainCtrl', [
'$scope',
'$http',
function($scope, $http){
  $scope.test = 'Hello world!';
  $http.get('/patient').success(function(data) {
    $scope.name = getName(data);
    $scope.orgName = data.managingOrganization.display;
    $scope.gender = data.gender;
    $scope.numCond = data.conditions.length;
    $scope.conditions = data.conditions;
  });
}]);