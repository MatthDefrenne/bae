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
    callFirstAmplitude()
    $scope.nextTestiomial = nextTestiomial;
    $scope.logEvent = logEvent;

    $scope.testimonials = [
        {
            name: 'Noé',
            role: 'Agent de sécurité',
            photo: 'https://scontent-bru2-1.xx.fbcdn.net/v/t1.0-9/12112507_10207910172586252_6697969676611794826_n.jpg?oh=771a29679d82d4c8686c8929c3dd3bdc&oe=58E6A377',
            text: 'Les effets de Drinky ne sont pas immédiat, mais bon ça fonctionne quand même bien !',
        },
        {
            name: 'Rémy',
            role: 'Étudiant',
            photo: 'https://scontent-bru2-1.xx.fbcdn.net/v/t1.0-9/10898114_1002964543051470_5583463675089764608_n.jpg?oh=d0a62a6fc26eb2f9a4e83e95b6a65ed1&oe=58FA487B',
            text: 'Très bonne boisson, goût comme le thé. Un bon effet au niveau de l\'énergie'
        },
        {
            name: 'David',
            role: 'Entrepreneur',
            photo: 'https://scontent-bru2-1.xx.fbcdn.net/v/t1.0-9/14063994_10202150940570936_1245890838172473257_n.jpg?oh=f46c81c01cb052cc6c65d7b45271415b&oe=58EFABBA',
            text: 'On ressent les effets au niveau de "l\'anti-stress", puis le goût est vraiment très bon'
        }
    ]

    $scope.oneTestimonial = $scope.testimonials[0];

    var i = 0;
    function nextTestiomial() {
        $scope.oneTestimonial = $scope.testimonials[i < $scope.testimonials.length - 1 ? i += 1 : i = 0];
    }

    function logEvent(name) {
        amplitude.getInstance().logEvent(name);
    }


    if(!_.isUndefined($location.$$hash) && $location.$$hash.length > 5) {
        amplitude.getInstance().logEvent('comeFrom' + $location.$$hash);
        location.hash = '';
        location.hash.replace("#", "");
    }

    function callFirstAmplitude() {
        if(!localStorage.userId) {
            localStorage.setItem("userId", Math.floor((Math.random() * 9999999) + 1));
            amplitude.getInstance().setUserId('' + localStorage.userId);
            amplitude.getInstance().logEvent('firstSessionDirectLik');
        }
    }


    $scope.shareOnMessenger = function() {
        FB.ui({
            method: 'send',
            link: 'http://www.drinky.be/#' + $scope.emailToShare,
        });
    }

}