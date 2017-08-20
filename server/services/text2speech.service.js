'use strict'

const drugs = require('../dataset/data');

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