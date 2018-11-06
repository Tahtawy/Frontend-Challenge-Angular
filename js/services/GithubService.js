(function () {

    var github = function ($http) {
        
        var currentUser;

        var getUsers = function (firstUser) {
            return $http.get('https://api.github.com/users').then(function (response) {
                if (firstUser) {
                    return response.data[0].login; // First User Login
                }
                return response.data; // All Users
            });
        };

        var setCurrentUser = function (login) {
            currentUser = $http.get('https://api.github.com/users/'+login).then(function (response) {
                return response.data;
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