/*!
 * ./server/routes.js
 * 
 * Declares the Express routes for the server
 * Authors: Abner Castro
 * Date: August 16th, 2017
 */

const express = require('express');
const router = express.Router();

const conversarion = require('./controllers/conversation.controller');

router.post('/message', conversarion.index)

module.exports = router;