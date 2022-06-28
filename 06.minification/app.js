var myApp = angular.module('myApp', []);

// This version checks the order of parameters in the array and not in the function. It supports in proper minification.
myApp.controller('mainController', ['$scope', '$log', function($scope, $log) { 
    console.log($scope);    
}]);


/**
 * The minified version changes the variable names into the shortest possible. 
 * 
 * myApp.controller("mainController",function(a,b){console.log(a)});
 * 
 * The above minified version will create issues as the AngularJs looks for the names for dependency injection of services.
 * 
 * 
 * If we pass the variable names as an array along with the function, as minification will not touch strings, 
 * AngularJs will be able to do dependency injection properly.
 * 
 * myApp.controller("mainController",["$scope","$log",function(a,b){console.log(a)}]);
 * 
 */
