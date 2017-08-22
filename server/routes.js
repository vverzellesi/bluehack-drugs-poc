/*!
 * ./server/routes.js
 *
 * Declares the Express routes for the server
 * Date: August 19th, 2017
 */

const express = require('express');
const router = express.Router();

const conversation = require('./controllers/conversation.controller');
const textToSpeech = require('./controllers/text2speech.controller');

router.post('/message', conversation.index)

router.get('/synthesize/:text', textToSpeech.index);
router.post('/synthesize/', textToSpeech.post);

module.exports = router;