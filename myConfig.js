angular.module('routerApp')
.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'partial-home.html'
        })

        // nested list with custom controller
        .state('home.list', {
          url: '/list',
          templateUrl: 'partial-home-list.html',
          controller: function($scope) {
            $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle', 'Australian Shephard', 'Poodle'];
          }
        })

        // nested list with just some random string data
        .state('home.paragraph', {
          url: '/paragraph',
          template: 'I\'m an articulate and awesome paragraph.'
        })

        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('about', {
            // we'll get to this in a bit
            url: '/about',
            views: {

              // the main template will be placed here (relatively named)
              '': { templateUrl: 'partial-about.html' },

              // the child views will be defined here (absolutely named)
              'columnOne@about': { template: 'This is the first column' },

              // for column two, we'll define a separate controller
              'columnTwo@about': {
                templateUrl: 'table-data.html',
                controller: 'scotchController'
              }
            }
        });

});
