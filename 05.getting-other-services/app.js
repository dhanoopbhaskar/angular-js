var myApp = angular.module('myApp', ['ngMessages']);

myApp.controller('mainController', function($scope, $log, $filter) {

    console.log($scope);
    console.log($log);


    $log.log("Hello World!");
    $log.info("This is an information.");
    $log.debug("This is for debugging.");
    $log.warn("This is a warning.");
    $log.error("This is an error.");


    $scope.name = 'Dhanoop';
    $scope.formattedName = $filter('uppercase')($scope.name);

    $log.info($scope.name);
    $log.info($scope.formattedName);

});
