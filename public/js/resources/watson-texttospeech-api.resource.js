/*!
 * ./public/js/resources/watson-api.resource.js
 * 
 * Declares Watson API service
 * Authors: Abner Castro
 * Date: August 20th, 2017
 */

(function () {
	'use strict';

	angular
		.module('chatbot.app.resources')
		.factory('WatsonTextToSpeechApi', WatsonTextToSpeechApi);

	WatsonTextToSpeechApi.$inject = ['$resource'];

	function WatsonTextToSpeechApi($resource) {
		return $resource('/api/synthesize', {}, {
			synthesize: {
				method: 'POST'
			}
		});
	}
})();