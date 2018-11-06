(function () {
    var app = angular.module("githubApp"); // Get referance to Angular module for controller registeration.

    var MainController = function ($scope, github) {

        github.getUsers().then(function (data) {
            $scope.users = data;
        });
        
        github.getUsers(true).then(function (data) { // Set Current User
            github.setCurrentUser(data);
        });

    };

    app.controller('MainController', MainController);
}());