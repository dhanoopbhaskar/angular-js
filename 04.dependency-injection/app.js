var myApp = angular.module('myApp', []);

myApp.controller('mainController', function($scope) {
    
    console.log($scope);
    
});

var searchPeople1 = function(firstName, lastName, height, age, occupation) {
    return 'Jane Doe';
}

var searchPeople2 = function(firstName, $scope, height, age, occupation) {
    console.log($scope);
    return 'Jane Doe';
}

console.log(angular.injector().annotate(searchPeople1));
console.log(angular.injector().annotate(searchPeople2));
