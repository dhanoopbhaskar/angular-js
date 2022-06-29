var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$filter', '$timeout', function($scope, $filter, $timeout) {
    
    $scope.twHandle = '';

    $scope.lowercaseHandle = function() {
        return $filter('lowercase')($scope.twHandle);
    };

    $scope.$watch('twHandle', function(newValue, oldValue) {
        
        console.info('Changed!');
        console.log('Old:' + oldValue);
        console.log('New:' + newValue);
        
    });

    $timeout(function() {

        $scope.twHandle = 'newTwitterHandler';
        console.log('Changed the value for twHandle!');
        console.log($scope.twHandle);
        
    }, 3000);

}]);
