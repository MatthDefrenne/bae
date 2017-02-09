angular.module('myApp.footerComponent', ['ngRoute'])

    .component('mainFooter', {
        templateUrl: '/components/footer/footer.view.html',
        controller: ['$scope', '$location', '$http', footerComponent]
    });


function footerComponent($scope, $location, $http) {

}