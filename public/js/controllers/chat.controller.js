/*!
 * ./public/js/controllers/chat.controller.js
 * 
 * Declares ChatController
 * Authors: Abner Castro
 * Date: August 16th, 2017
 */

(function () {
    'use strict';

    angular
        .module('chatbot.app')
        .constant('STARTER_MESSAGE', {
            message: 'Olá'
        })
        .controller('ChatController', ChatController);

    ChatController.$inject = ['$scope', '$log', 'Conversation', 'TextToSpeech', 'ngAudio', 'STARTER_MESSAGE'];

    function ChatController($scope, $log, Conversation, TextToSpeech, ngAudio, STARTER_MESSAGE) {
        var vm = this;

        vm.input = "";
        vm.messages = [];

        vm.sendMessage = function () {
            if (vm.input !== "") {
                var message = {};
                message["recipient"] = "user";
                message["content"] = vm.input;
                message["date"] = (new Date()).toTimeString().substr(0, 8)
                vm.messages.push(message);
                vm.input = "";
                $log.log(vm.messages);

                Conversation.sendMessage(message.content)
                    .then(appendWatsonReply)
                    .catch(handleWatsonError);
            }
        }

        vm.transcriptMessage = function (text) {
            vm.sound = ngAudio.load('api/synthesize/' + text);            
            vm.sound.play();            
            // TextToSpeech.transcriptMessage(text)
            //     .then(stream => {
            //         $log.log(stream);
            //         vm.sound = ngAudio.load(stream);
            //         vm.sound.play();
            //     })
            //     .catch(err => {
            //         $log.log(err);
            //     })
        }

        function appendWatsonReply(data) {
            if (data) {
                var reply = {};
                reply["recipient"] = "watson";
                reply["content"] = data.output.text[0];
                reply["date"] = (new Date()).toTimeString().substr(0, 8)

                vm.messages.push(reply);
            }
        }

        function handleWatsonError(err) {
            if (err) {
                console.log(err);
                var reply = {};
                reply["recipient"] = "watson";
                reply["content"] = err.data.message;
                reply["date"] = (new Date()).toTimeString().substr(0, 8)

                vm.messages.push(reply);
            }
        }

        activate();

        ////////////////

        function activate() {
            Conversation.sendMessage(STARTER_MESSAGE.message)
                .then(appendWatsonReply)
                .catch(handleWatsonError);
        }
    }
})();