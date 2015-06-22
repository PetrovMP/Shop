var rubinApp = angular.module('rubinApp', ['ngRoute']);

rubinApp.config(['$routeProvider', '$locationProvider', function ($routeProvide, $locationProvider) {
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });

    $routeProvide
        .when('/', {
            templateUrl: 'Pages/Home.html',
            controller: 'HomeCtrl'
        })
        .when('/zakupki', {
            templateUrl: 'Pages/Zakupki.html',
            controller: 'ZakupkiCtrl'
        })
        .when('/pristroy', {
            templateUrl: 'Pages/Pristroy.html',
            controller: 'PristroyCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);

rubinApp.controller('HomeCtrl', ['$scope', '$http', '$location', function ($scope, $http, $location) {

}]);

rubinApp.controller('ZakupkiCtrl', ['$scope', '$http', '$location', function ($scope, $http, $location) {
    $http.get('http://localhost:1743/values').success(function (data, status, headers, config) {
        console.log('test' + data);
        $scope.ttt = data;
    });
}]);

rubinApp.controller('PristroyCtrl', ['$scope', '$http', '$location', function ($scope, $http, $location) {

}]);