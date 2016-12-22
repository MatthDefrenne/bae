angular.module('myApp.productsComponent', ['ngRoute'])


    .component('products', {
        templateUrl: '/components/products/products.view.html',
        controller: ['$scope', '$http', '$location', productComponent]
    })

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/products/', {
            template: '<products></products>'
        });
    }]);


function productComponent($scope, $http, $location) {

    $scope.logEvent = logEvent;
    $scope.sendOrder = sendOrder;

    function logEvent(name) {
        amplitude.getInstance().logEvent(name);
    }

    $scope.quantity = '1';

    function sendOrder(order) {
        if(order.mail) {
            order.quantity = parseInt($scope.quantity);
            if($location.$$hash) {
                order.sponsorship = $location.$$hash ? $location.$$hash : null;
            }

            $scope.inProgress = true;
            $http.post('/new-order/', {order: order}).success(function() {
                $scope.order = {};
                alert('Merci pour votre commande, vous allez recevoir un mail dans quelque minutes.')
                amplitude.getInstance().logEvent('clickOnBuyDrinkyWithQuantity' + order.quantity);
                $scope.error = false;
                $scope.inProgress = false;
            }).catch(function(error) {
                $scope.error = true;
                $scope.inProgress = false;
                console.log(error)
            })
        } else {
            $scope.errorMail = true;
        }


    }

}