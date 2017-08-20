/*!
 * ./app.js
 *
 * Main file for the server
 * Authors: Abner Castro
 * Date: August 16th, 2017
 */

'use strict'

// Populate process.env object with variables in .env file
require('dotenv').config();

var express = require('express'),
    app = express();

// Parser for POST requests
var bodyParser = require('body-parser');

// serve the files out of ./public as our main files
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// cfenv provides access to your Cloud Foundry environment
// for more info, see: https://www.npmjs.com/package/cfenv
var cfenv = require('cfenv');

// get the app environment from Cloud Foundry
var env = cfenv.getAppEnv();

var CheckWorkspaceMiddleware = (req, res, next) => {
    var workspace = process.env.WORKSPACE_ID;
    if (!workspace || workspace === '<workspace-id>') {
        console.error('WORKSPACE ID not set');
        return res.json({
            'output': {
                'text': 'The app has not been configured with a <b>WORKSPACE_ID</b> environment variable. Please refer to the ' + '<a href="https://github.com/watson-developer-cloud/conversation-simple">README</a> documentation on how to set this variable. <br>' + 'Once a workspace has been defined the intents may be imported from ' + '<a href="https://github.com/watson-developer-cloud/conversation-simple/blob/master/training/car_workspace.json">here</a> in order to get a working application.'
            }
        });
    } else {
        // Attach WorkspaceID to request object
        req.workspaceId = workspace;
        next();
    }
}

app.use(CheckWorkspaceMiddleware);

// Sets up routes
const routes = require('./server/routes');

app.use('/api', routes);

// start server on the specified port and binding host
app.listen(env.port, '0.0.0.0', function () {
    // print a message when the server starts listening
    console.log("server starting on " + env.url);
});