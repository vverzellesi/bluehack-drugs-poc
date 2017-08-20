
'use strict'

const textToSpeechService = require('../services/text2speech.service');
const querystring = require('querystring');

class TextToSpeechController {
	index(req, res) {
		const decodedUrl = decodeURI(req.url);
		const text = decodedUrl.substring("/synthesize/".length, decodedUrl.length);
		const params = {
			text: text,
			voice: 'pt-BR_IsabelaVoice',
			accept: 'audio/mp3'
		}
		const transcript = textToSpeechService.get().synthesize(params);
		transcript.on('response', (response) => {
			response.headers['content-disposition'] = 'attachment; filename=transcript.mp3';

		});
		transcript.on('error', (err) => {
			console.log(err);
		})
		transcript.pipe(res);
	}

	post(req, res) {
		console.log('texttospeech')
		const $body = req.body;
		const params = {
			text: $body.text,
			voice: 'pt-BR_IsabelaVoice',
			accept: 'audio/mp3'
		}
		const transcript = textToSpeechService.get().synthesize(params);
		transcript.on('response', (response) => {
			response.headers['content-disposition'] = 'attachment; filename=transcript.mp3';

		});
		transcript.on('error', (err) => {
			console.log(err);
		})
		transcript.pipe(res);
	}
}

module.exports = new TextToSpeechController;