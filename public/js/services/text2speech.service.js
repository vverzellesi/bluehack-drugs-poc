/*!
 * ./public/js/services/text2speech.service.js
 * 
 * Declares the Text to Speech service
 * Date: August 19th, 2017
 */

(function () {
    'use strict';

    angular
        .module('chatbot.app.services')
        .factory('TextToSpeech', TextToSpeech);

		TextToSpeech.$inject = ['$log', 'WatsonTextToSpeechApi'];

    function TextToSpeech($log, $watson) {
        var service = {
            transcriptMessage: transcriptMessage
        };

        return service;

        function transcriptMessage(contents) {
            return $watson.synthesize({
                text: contents
            }).$promise;
        }
    }
})();