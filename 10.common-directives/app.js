var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$filter', function($scope, $filter) {
    
    $scope.twHandle = '';

    $scope.lowercaseHandle = function() {
        return $filter('lowercase')($scope.twHandle);
    };

    $scope.characters = 10;
    
    $scope.rules = [
      
        { rulename: "Must be 10 characters" },
        { rulename: "Must not be used elsewhere" },
        { rulename: "Must be cool" }
        
    ];
    
    console.log($scope.rules);
    

    $scope.alertClick = function() {
        alert("Clicked!");
    };

    $scope.name = 'Dhanoop';

}]);
