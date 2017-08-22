/*!
 * ./public/js/resources/watson-conversation-api.resource.js
 *
 * Declares Watson API service
 * Date: August 20th, 2017
 */

(function () {
    'use strict';

    angular
        .module('chatbot.app.resources')
        .factory('WatsonConversationApi', WatsonConversationApi);

    WatsonConversationApi.$inject = ['$resource'];

    function WatsonConversationApi($resource) {
        return $resource('/api/message', {}, {
            send: {
                method: 'POST'
            }
        });
    }
})();