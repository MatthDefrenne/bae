angular.module('myApp.homeComponent', ['ngRoute'])


    .component('home', {
        templateUrl: '/components/home/home.view.html',
        controller: ['$scope', '$location', homeComponent]
    })

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/', {
            template: '<home></home>',
        });
    }]);


function homeComponent($scope, $location) {


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

}