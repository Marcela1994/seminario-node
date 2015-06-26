/* core de la funcionalidad de la aplicación */
var testMessagesGet = require('./../test/messages-get.json');


// actions
// ==============================================

// obtiene todos los mensajes desde la persistencia
var getAllMessages = function (req, res) {  
  res.json(testMessagesGet);
};


// publica un nuevo mensaje
var postNewMessage = function (req, res) {
  
  var msg = req.body;
      msg.timestamp = new Date().toISOString();
  
  //save msg
  res.status(202);
  res.send();
};



//exports
var exports = module.exports = {};
    exports.postNewMessage = postNewMessage;
    exports.getAllMessages = getAllMessages;