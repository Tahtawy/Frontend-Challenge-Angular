(function () {

    var app = angular.module("githubApp", ['restangular']).config(function (RestangularProvider) {
        RestangularProvider.setBaseUrl('https://api.github.com/');
    });

}());