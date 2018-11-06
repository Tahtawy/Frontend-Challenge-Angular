(function () {
    var app = angular.module("githubApp"); // Get referance to Angular module for controller registeration.

    var UserDetailsController = function ($rootScope, github) {

        github.getUsers(true).then(function (data) { // Set Current User
            github.setCurrentUser(data);
            github.getCurrentUser().then(function (response) {
                $rootScope.currentUser = response;
            });
        });

    };

    app.controller('UserDetailsController', UserDetailsController);
}());