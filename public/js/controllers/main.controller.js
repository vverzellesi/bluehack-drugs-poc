/*!
 * ./public/js/controllers/main.controller.js
 * 
 * Declares MainController
 * Date: August 19th, 2017
 */

(function () {
    'use strict';

    angular
        .module('chatbot.app')
        .controller('MainController', MainController);

    MainController.$inject = ['$log'];

    function MainController($log) {
        var vm = this;


        activate();

        ////////////////

        function activate() { }
    }

})();