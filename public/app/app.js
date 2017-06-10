var app = angular.module('smarthome', ['ngRoute', 'smarthome.controllers.dashboard']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl : '/index'
        });
});