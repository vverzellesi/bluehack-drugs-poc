/*!
 * ./server/services/text2speech.service.js
 *
 * Declares the Watson Text to Speech service
 * Date: August 20th, 2017
 */

'use strict'

class TextToSpeechService {
    get() {
        // Watson Conversation SDK
        var TextToSpeech = require('watson-developer-cloud/text-to-speech/v1');

        return new TextToSpeech({
            username: process.env.TEXT_TO_SPEECH_USERNAME,
            password: process.env.TEXT_TO_SPEECH_PASSWORD
        });
    }
}

module.exports = new TextToSpeechService;