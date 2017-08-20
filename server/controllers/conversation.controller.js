'use strict'

const conversationService = require('../services/conversation.service');
const Drugs = require('../models/drugs');

var context = {};

class ConversationController {
    index(req, res) {
        var $body = req.body;

        var input = {
            text: $body.message
        };

        var payload = {
            workspace_id: req.workspaceId,
            context: context,
            input: input || {}
        }

        conversationService.message(payload)
            .then((data, resolve, reject) => {
                // update context
                context = data.context;

                if (data.entities.length > 0)
                    var drug = data.entities[0].value;

                switch (data.output.command) {
                    case "check_pregnancy":                                                
                        context.checkPregnancy = Drugs.checkAttribute(drug, 'pregnantsAllowed');
                        const newPayload = {
                            workspace_id: req.workspaceId,
                            context: context,
                            input: {
                                text: ""
                            }
                        }
                        return conversationService.message(newPayload);
                        break;
                    default:
                        console.log('default')
                        break;
                }

                res.json(data);
            })
            .then(function (data) {
                if (data) {
                    context = data.context;
                    res.json(data);
                }
            })
            .catch(err => {
                console.log(err.stack);
                res.status(500).json({
                    error: err,
                    message: err.message
                });
            });

    }
}

module.exports = new ConversationController;