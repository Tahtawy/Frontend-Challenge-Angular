(function () {
    var app = angular.module("githubApp");

    var MainController = function ($scope, github) {

        github.getUsers().then(function (data) {
            $scope.users = data;
        });
        
        github.getUsers(true).then(function (data) { // Set Current User
            github.setCurrentUser(data);
            github.getCurrentUser().then(function(data) {
                $scope.currentUser = data;
            });
        });

    };

    app.controller('MainController', MainController);
}());