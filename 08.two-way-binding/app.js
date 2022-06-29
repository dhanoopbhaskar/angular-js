var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$filter', function($scope, $filter) {
    
    $scope.twHandle = '';

    $scope.lowercaseHandle = function() {
        return $filter('lowercase')($scope.twHandle);
    };    
    
}]);
