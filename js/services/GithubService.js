(function () {

    var github = function ($http, Restangular) {
        
        var currentUser;

        var getUsers = function (firstUser) {
            return Restangular.all('users').getList().then(function (response) {
                if (firstUser) {
                    return response[0].login; // First User Login
                }
                return response; // All Users
            });
        };

        var setCurrentUser = function (login) {
            currentUser = Restangular.one('users', login).get().then(function (response) {
                return response;
            });
        }

        var getCurrentUser = function () {
            return currentUser;
        }

        return {
            getUsers: getUsers,
            setCurrentUser: setCurrentUser,
            getCurrentUser: getCurrentUser
        };

    };

    var app = angular.module('githubApp'); // Get Referance To Module
    app.factory('github', github); // Register the service

}());