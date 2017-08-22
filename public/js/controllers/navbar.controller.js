/*!
 * ./public/js/controllers/navbar.controller.js
 * 
 * Declares NavbarController
 * Date: August 19th, 2017
 */

(function() {
    'use strict';

    angular
        .module('chatbot.app')
        .controller('NavbarController', NavbarController);

    NavbarController.$inject = ['$scope', '$location'];
    function NavbarController($scope, $location) {				
        $scope.isActive = function (location) {
            return location === $location.path();
        }
    }
    
})();