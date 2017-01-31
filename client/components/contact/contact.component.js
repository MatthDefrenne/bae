angular.module('myApp.contactComponent', ['ngRoute'])

    .component('contact', {
        templateUrl: '/components/contact/contact.view.html',
        controller: ['$scope', '$location', '$rootScope', '$route', contactComponent]
    })

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/contact/', {
            template: '<contact></contact>',
        });
    }]);


function contactComponent($scope, $location, $rootScope) {


}