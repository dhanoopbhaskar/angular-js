var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$filter', '$http', function($scope, $filter, $http) {
    
    $scope.twHandle = '';

    $scope.lowercaseHandle = function() {
        return $filter('lowercase')($scope.twHandle);
    };

    $scope.characters = 10;
    
    $http.get('/api')
        .success(function(result) {
            $scope.rules = result;
        })
        .error(function(data, status) {
            console.log(data);
            console.log(status);
        });
    
    $scope.newRule = '';
    $scope.addRule = function () {
        $http.post('/api', { newRule: $scope.newRule })
            .success(function(result) {
                console.log(result);
                $scope.rules = result;
                $scope.newRule = '';
            })
            .error(function(data, status) {
                console.log(data);
                console.log(status);
            });
    };

}]);
