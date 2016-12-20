angular.module('myApp.homeComponent', ['ngRoute'])


    .component('home', {
        templateUrl: '/components/home/home.view.html',
        controller: ['$scope', '$interval', homeComponent]
    })

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/', {
            template: '<home></home>'
        });
    }]);


function homeComponent($scope, $interval) {


    $scope.nextTestiomial = nextTestiomial;
    $scope.logEvent = logEvent;

    $scope.testimonials = [
        {
            name: 'Matthieu',
            role: 'Créateur de Drinky',
            photo: 'https://scontent-bru2-1.xx.fbcdn.net/v/t1.0-9/13709980_1066160156770494_2696837185881752843_n.jpg?oh=bcabe28a1193cc5be0ef9e426e311cbe&oe=58B16F05',
            text: 'Prendre soins de soi',
        },
        {
            name: 'Noé',
            role: 'Agent de sécurité',
            photo: 'https://scontent-bru2-1.xx.fbcdn.net/v/t1.0-9/12112507_10207910172586252_6697969676611794826_n.jpg?oh=771a29679d82d4c8686c8929c3dd3bdc&oe=58E6A377',
            text: '',
        },
        {
            name: 'Rémy',
            role: 'Étudiant',
            photo: 'https://scontent-bru2-1.xx.fbcdn.net/v/t1.0-9/10898114_1002964543051470_5583463675089764608_n.jpg?oh=d0a62a6fc26eb2f9a4e83e95b6a65ed1&oe=58FA487B',
            text: 'Très bonne boisson, goût comme le thé. Effet immédiat pour l\'énergie, sauf le stress, même si je suis pas forcément stresser dans la vie on dors beaucoup mieux par contre.'
        },
        {
            name: 'David',
            role: 'Entrepreneur',
            photo: 'https://scontent-bru2-1.xx.fbcdn.net/v/t1.0-9/10898114_1002964543051470_5583463675089764608_n.jpg?oh=d0a62a6fc26eb2f9a4e83e95b6a65ed1&oe=58FA487B',
            text: 'Métier stressant, Drinky est la solution parfaite à mon problème du quotidien.'
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

    amplitude.getInstance().setUserId('' + Math.floor((Math.random() * 9999999) + 1));

}