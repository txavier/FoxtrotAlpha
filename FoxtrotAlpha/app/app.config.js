(function () {
    'use strict';

    angular
        .module('app')
        .config(config);

    function config($routeProvider, $locationProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: 'app/home/home.html',
                controller: 'homeController',
                controllerAs: 'vm'
            })
            .otherwise({ redirectTo: 'home' });
    }

})();