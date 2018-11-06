(function () {
    var app = angular.module("githubApp");

    var SidebarController = function ($scope, $rootScope, github) { 
        
        github.getUsers().then(function (data) {
            $scope.userList = data;
        });

        $scope.onClickUserItem = function (userLogin) {
            github.setCurrentUser(userLogin);
            github.getCurrentUser().then(function (response) {
                $rootScope.currentUser = response;
            });
        };

    };

    app.controller('SidebarController', SidebarController);
}());