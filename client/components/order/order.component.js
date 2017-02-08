angular.module('myApp.orderComponent', ['ngRoute'])

    .component('order', {
        templateUrl: '/components/order/order.view.html',
        controller: ['$scope', '$timeout', '$http', '$location', orderComponent]
    })

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/order/', {
            template: '<order></order>',
        });


}]);

function orderComponent($scope, $timeout, $http, $location) {


    var code = $location.hash();
    $scope.newOrder = newOrder;
    $scope.order = {};

    if(code.length != 0) {
        newOrder();
    }

    function newOrder() {
        $scope.error = false;
        code = $location.hash() || $scope.order.code;
        $http.get('/api/user/?code=' + code + "").success(function (order) {
            $scope.success = true;
            $scope.order = order;
        }).catch(function (error) {
            $scope.error = true;
            console.log(error)
        })
    }


    $scope.sendOrder = function(order) {
        $scope.errorOrder = false;
        $http.post('/api/order/', {order: order}).success(function() {
            $scope.errorOrder = false;
        }).catch(function(error) {
            console.log(error)
            $scope.errorOrder = true;
        })
    }

}