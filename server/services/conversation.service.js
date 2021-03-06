/*!
 * ./server/services/conversation.service.js
 *
 * Declares the Watson Conversation service
 * Date: August 19th, 2017
 */

'use strict'

class ConversationService {
    get() {
        // Watson Conversation SDK
        var Conversation = require('watson-developer-cloud/conversation/v1');

        return new Conversation({
            // If unspecified here, the CONVERSATION_USERNAME and CONVERSATION_PASSWORD env properties will be checked
            // After that, the SDK will fall back to the bluemix-provided VCAP_SERVICES environment property
            // usernames: '<username>',
            // password: '<password>',
            url: 'https://gateway.watsonplatform.net/conversation/api',
            version_date: '2016-10-21',
            version: 'v1'
        });
    }

    message(payload) {
        return new Promise((resolve, reject) => {
            this.get().message(payload, (err, data) => {
                if (err) reject(err);
                else resolve(data);
            })
        })
    }
}

module.exports = new ConversationService;