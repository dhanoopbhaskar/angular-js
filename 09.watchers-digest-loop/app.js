var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$filter', function($scope, $filter) {
    
    $scope.twHandle = '';

    $scope.lowercaseHandle = function() {
        return $filter('lowercase')($scope.twHandle);
    };

    $scope.$watch('twHandle', function(newValue, oldValue) {
        
        console.info('Changed!');
        console.log('Old:' + oldValue);
        console.log('New:' + newValue);
        
    });

    setTimeout(function() {
        $scope.twHandle = 'newTwitterHandler';
        console.log('Changed the value for twHandle!');
    }, 3000);

}]);
