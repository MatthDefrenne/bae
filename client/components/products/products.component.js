angular.module('myApp.productsComponent', ['ngRoute'])


    .component('products', {
        templateUrl: '/components/products/products.view.html',
        controller: ['$scope', '$interval', productComponent]
    })

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/products/', {
            template: '<products></products>'
        });
    }]);


function productComponent($scope, $interval) {

    $scope.logEvent = logEvent;

    function logEvent(name) {
        amplitude.getInstance().logEvent(name);
    }

    $scope.quantity = '1';
}