/*!
 * ./public/js/app.js
 * 
 * Main Angular module
 * Date: August 19th, 2017
 */

(function () {
    'use strict';

    angular.module('chatbot.app', [
        'ngRoute',
        'ngAudio',
        'chatbot.app.services',
        'luegg.directives',
    ]);

    angular
        .module('chatbot.app')
        .config(['$compileProvider', '$routeProvider', '$locationProvider',
            function ($compileProvider, $routeProvider, $locationProvider) {
                // Uncomment for Production
                // $compileProvider.debugInfoEnabled(false);

                $routeProvider
                    .when('/', {
                        templateUrl: '/views/home.view.html'
                    })
                    .when('/about', {
                        templateUrl: '/views/about.view.html'
                    })
                    .otherwise({
                        redirectTo: '/'
                    });

                $locationProvider.html5Mode(true);

            }
        ]);

})();