'use strict';

angular.module('myApp', [
    'ngRoute',
    'templates-main',
    'myApp.homeComponent',
    'myApp.productsComponent',
])
    .config(['$locationProvider', '$routeProvider', '$logProvider', function ($locationProvider, $routeProvider, $logProvider) {
        $locationProvider.hashPrefix('!');
        $routeProvider.otherwise({redirectTo: '/'});
        $logProvider.debugEnabled(false);
        $locationProvider.html5Mode(true);

    }]);

