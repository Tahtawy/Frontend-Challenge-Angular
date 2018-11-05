(function () {
    var app = angular.module("githubApp");

    var MainController = function ($scope, github) {
        
        github.getUsers().then(function (data) {
            $scope.users = data;
        });

        github.getUsers(true).then(function (data) {
            $scope.first = data;
        });

    };

    app.controller('MainController', MainController);
}());