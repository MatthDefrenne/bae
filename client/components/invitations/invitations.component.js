angular.module('myApp.invitationsComponent', ['ngRoute'])

    .component('invitations', {
        templateUrl: '/components/invitations/invitations.view.html',
        controller: ['$scope', '$location', '$rootScope', '$route', invitationsComponent]
    })

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/invitations/', {
            template: '<invitations></invitations>',
        });
    }]);


function invitationsComponent($scope, $location, $rootScope) {

    window.scrollTo(500, 0);

}