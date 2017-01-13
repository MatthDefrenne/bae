angular.module('myApp.homeComponent', ['ngRoute'])


    .component('home', {
        templateUrl: '/components/home/home.view.html',
        controller: ['$scope', '$location', homeComponent]
    })

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/', {
            template: '<home></home>'
        });
    }]);


function homeComponent($scope, $location) {


}