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

                if (data.output.command === "check_params") {
                    // attach params to context
                    context["checkPregnancy"] = Drugs.getAttribute(drug, 'pregnantsAllowed');
                    context["contraindicationQuestion"] = Drugs.getAttribute(drug, 'contraindicationQuestion');
                    context["interactsWithQuestion"] = Drugs.getAttribute(drug, 'interactsWithQuestion');
                    
                    // dummy payload to update the context
                    const dummyPayload = {
                        workspace_id: req.workspaceId,
                        context: context,
                        input: {
                            text: ""
                        }
                    }

                    return conversationService.message(dummyPayload);
                }

                console.log(data);
                res.json(data);
            })
            .then(function (result) {
                if (result) {
                    context = result.context;
                    res.json(result);
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