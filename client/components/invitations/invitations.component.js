angular.module('myApp.invitationsComponent', ['ngRoute'])

    .component('invitations', {
        templateUrl: '/components/invitations/invitations.view.html',
        controller: ['$scope', '$timeout', '$http', invitationsComponent]
    })

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/invitations/', {
            template: '<invitations></invitations>',
        });
    }]);


function invitationsComponent($scope, $timeout, $http) {

    window.scrollTo(500, 0);
    $scope.sendInvitation = sendInvitation;
    $scope.openTakePhoto = openTakePhoto;
    $scope.imageURL = false;
    $scope.inProgressUploadImage = false;
    function sendInvitation(invitation) {
        $scope.error = false;
        $scope.errorslabel = false;
        if(!invitation
            || !$scope.imageURL
            || !invitation.email
            || !invitation.firstname
            || !invitation.adress
            || !invitation.postal
            || !invitation.lastname) {
            $scope.errorslabel = true;
        } else {
            $scope.inProgress = true;
            invitation.imageURL = $scope.imageURL;
            $http.post('/api/invitation/',{invitation: invitation}).success(function(response) {
                $scope.sucess = true;
                $scope.inProgress = false;
                $scope.invitation = {};
                getTotalInvitation();
            }).catch(function(error) {
                $scope.inProgress = false;
                $scope.error = true;
                console.log(error);
            })
        }
    }

    getTotalInvitation();
    function getTotalInvitation() {
        $scope.totalInvitation = 0;
        $http.get('/api/total-invitation/').success(function(count) {
            $scope.totalInvitation = 100 - count;
        })
    }


    function openTakePhoto() {
        $scope.inProgressUploadImage = true;
        filepicker.pick(
            {
                mimetype: 'image/*',
                container: 'window',
                services: ['COMPUTER', 'FACEBOOK', 'INSTAGRAM', 'GOOGLE_DRIVE', 'DROPBOX']
            },
            function(image){
                $scope.inProgressUploadImage = false;
                $scope.imageURL = image.url
            },
            function(FPError){
                console.log(FPError.toString());
            });
    }

}