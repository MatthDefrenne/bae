angular.module('myApp.invitationsComponent', ['ngRoute'])

    .component('invitations', {
        templateUrl: '/components/invitations/invitations.view.html',
        controller: ['$scope', '$location', '$http', invitationsComponent]
    })

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/invitations/', {
            template: '<invitations></invitations>',
        });
    }]);


function invitationsComponent($scope, $location, $http) {

    window.scrollTo(500, 0);
    $scope.sendInvitation = sendInvitation;

    function sendInvitation(invitation) {
        $scope.error = false;
        $scope.inProgress = true;
        $http.post('/invitation/', {invitation: invitation}).success(function(response) {
            $scope.inProgress = false;
            $scope.invitation = {};
        }).catch(function(error) {
            $scope.inProgress = false;
            $scope.error = true;
            $scope.invitation = {};
            console.log(error);
        })
    }




}