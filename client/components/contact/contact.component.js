angular.module('myApp.contactComponent', ['ngRoute'])

    .component('contact', {
        templateUrl: '/components/contact/contact.view.html',
        controller: ['$scope', '$location', '$http',contactComponent]
    })

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/contact/', {
            template: '<contact></contact>',
        });
    }]);


function contactComponent($scope, $location, $http) {

    window.scrollTo(500, 0);


    $scope.sendMessage = function(contact) {

        $http.post('/api/contact-us/', {contactUS: contact}).success(function() {
            $scope.success = true;
            $scope.contact = {};
        })

    }

}