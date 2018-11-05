(function () {

    var github = function ($http) {
        
        var getUsers = function (firstUser) {
            return $http.get('https://api.github.com/users').then(function (response) {
                if(firstUser) {
                    return response.data[0].login;  
                } 
                return response.data;
            });
        };

        return {
            getUsers: getUsers
        };

    };

    var app = angular.module('githubApp');
    app.factory('github', github); // Register the service

}());