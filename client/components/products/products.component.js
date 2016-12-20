angular.module('myApp.productsComponent', ['ngRoute'])


    .component('products', {
        templateUrl: '/components/products/products.view.html',
        controller: ['$scope', '$http', productComponent]
    })

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/products/', {
            template: '<products></products>'
        });
    }]);


function productComponent($scope, $http) {

    $scope.logEvent = logEvent;
    $scope.sendOrder = sendOrder;

    function logEvent(name) {
        amplitude.getInstance().logEvent(name);
    }

    $scope.quantity = '1';

    function sendOrder(order) {
        if(order.mail) {
            order.quantity = parseInt($scope.quantity);
            $scope.inProgress = true;
            $http.post('/new-order/', {order: order}).success(function() {
                $scope.order = {};
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