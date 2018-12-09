/*
Directives allow you to extend HTML. There are many built in and youcan make
custom ones as well. Built in directives provide event handling, form
validation, templates and more.
*/

// Define the AngularJS Module
var app3 = angular.module('app3', []);

// Define the Controller and implement the Scope
app3.controller('gListCtrl', function ($scope) {

    $scope.groceries = [
        { item: "Bacon", purchased: false },
        { item: "Lettuce", purchased: false },
        { item: "Tomatoes", purchased: false },
        { item: "Eggs", purchased: false },
		{ item: "Bread", purchased: false }
    ];

    // Return a different HTML partial based on whether the
    // checkbox is checked or not
    $scope.getList = function () {
        return $scope.showList ? "ulgrocerylist.html" : "grocerylist.html";
    };

});
