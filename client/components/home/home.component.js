angular.module('myApp.homeComponent', ['ngRoute'])


    .component('home', {
        templateUrl: '/components/home/home.view.html',
        controller: ['$scope', '$http', homeComponent]
    })

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/', {
            template: '<home></home>',
        });
    }]);


function homeComponent($scope, $http) {


    $scope.sendMail = sendMail;

    $scope.hasClickedOnProduct = false;

    $(document).ready(function () {
        if ($(this).scrollTop() > 600) {
            $('#nav').fadeIn();
        } else {
            $('#nav').fadeOut();
        }

        $(function () {
            $(window).scroll(function () {
                if ($(this).scrollTop() > 600) {
                    $('#nav').fadeIn();
                } else {
                    $('#nav').fadeOut();
                }
            });
        });
    });

    $scope.clickOnProduct = function(name) {
        $scope.name = name;
        $scope.hasClickedOnProduct = true
        $('html,body').animate({
            scrollTop:$("#PRODUCT").offset().top
        },'slow');
    }

    $scope.closeProduct = function() {
        $scope.hasClickedOnProduct = false
        $('html,body').animate({
            scrollTop:$("#PRODUCT").offset().top
        },'slow');
    }

    $scope.GOTOWHAT = function() {
        $('html,body').animate({
            scrollTop:$("#WHATBAE").offset().top
        },'slow');
    }

    $scope.GOTOTOP = function() {
        $('html,body').animate({
            scrollTop: 0
        },'slow');
    }

    $scope.GOTOPRODUCT = function() {
        $('html,body').animate({
            scrollTop:$("#PRODUCT").offset().top
        },'slow');
    }

    $scope.GOTOBUY = function() {
        $('html,body').animate({
            scrollTop:$("#BUY").offset().top
        },'slow');
    }
    getTotalInvitation();

    function getTotalInvitation() {
        $scope.totalInvitation = 0;
        $http.get('/api/total-invitation/').success(function(count) {
            $scope.totalInvitation = 100 - count;
        })
    }

    function sendMail(email) {
        $scope.success = false;
        $http.post('/api/mail/', {email: email}).success(function(count) {
            $scope.success = true;
        })
    }

}