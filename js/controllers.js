/**
 * Created by Rain on 2015/7/2.
 */
var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListCtrl', function($scope) {
    $scope.phones = [
        {'name': 'Nexus S',
            'snippet': 'Fast just got faster with Nexus S.'},
        {'name': 'Motorola XOOM? with Wi-Fi',
            'snippet': 'The Next, Next Generation tablet.'},
        {'name': 'MOTOROLA XOOM?',
            'snippet': 'The Next, Next Generation tablet.'}
    ];

    $scope.hello="Hello,World!";
});