// let's define the scotch controller that we call up in the about state
angular.module('routerApp')
.controller('scotchController', function($scope) {

    $scope.message = 'test';

    $scope.scotches = [
        {
            name: 'Macallan 12',
            price: 5012
        },
        {
            name: 'Chivas Regal Royal Salute',
            price: 8323
        },
        {
            name: 'Pug the Great',
            price: 20000
        },
        {
            name: 'Darwin the Devious',
            price: 8123
        }
    ];

});
