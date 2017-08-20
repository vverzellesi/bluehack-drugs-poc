/*!
 * ./public/js/resources/watson-api.resource.js
 * 
 * Declares Watson API service
 * Authors: Abner Castro
 * Date: August 16th, 2017
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