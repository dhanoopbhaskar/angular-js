var myApp = angular.module('myApp', []);

myApp.controller('mainController', function($scope) {
    
});

var searchPeople = function(firstName, lastName, height, age, occupation) {
    return 'Jane Doe';
}

console.log(searchPeople());

var searchPeopleString = searchPeople.toString();
console.log(searchPeople);
console.log(searchPeopleString);
