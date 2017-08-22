/*!
 * ./public/js/services/conversation.service.js
 * 
 * Declares the Conversation service
 * Date: August 19th, 2017
 */

(function () {
    'use strict';

    angular
        .module('chatbot.app.services')
        .factory('Conversation', Conversation);

    Conversation.$inject = ['$log', 'WatsonConversationApi'];

    function Conversation($log, $watson) {
        var service = {
            sendMessage: sendMessage
        };

        return service;

        function sendMessage(contents) {
            return $watson.send({
                message: contents
            }).$promise;
        }
    }
})();