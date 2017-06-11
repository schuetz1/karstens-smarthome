'use strict';
angular.module('smartHome', ['ngRoute', 'smarthome.controllers.dashboard'])
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: '/partials/index'
            });

        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    });