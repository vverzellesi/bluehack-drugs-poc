const conversationService = require('../services/conversation.service');
const medicines = require('../dataset/data');

class ConversationController {
  index(req, res) {
    var $body = req.body;

    var input = {
      text: $body.message
    };

    var payload = {
      workspace_id: req.workspaceId,
      context: $body.context || {},
      input: input || {}
    }

    conversationService.get().message(payload, (err, data) => {
      if (err) {
        console.error(err);
        return res.status(err.code || 500).json(err);
      }

      // const medicine = data.intents[0].intent;
      // const medicine = 'advil';
      
      // const info = medicines[medicine];

      // if (!info) {
      //   console.error(err);
      //   return res.status(err.code || 500).json(err);
      // }
      
      res.json(data);
    });
  }
}

module.exports = new ConversationController;