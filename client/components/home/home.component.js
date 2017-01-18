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

    $(document).ready(function () {
        if ($(this).scrollTop() > 600) {
            $('.navbar').fadeIn();
        } else {
            $('.navbar').fadeOut();
        }

        $(function () {
            $(window).scroll(function () {
                if ($(this).scrollTop() > 600) {
                    $('.navbar').fadeIn();
                } else {
                    $('.navbar').fadeOut();
                }
            });
        });
    });

}