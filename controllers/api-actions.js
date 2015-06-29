/* core de la funcionalidad de la aplicación */
var db = require('./../database/manager');


// actions
// ==============================================

// obtiene todos los mensajes desde la persistencia
var getAllMessages = function (req, res) {  
    
  var limit = req.param('limit') ? Number(req.param('limit')) : 10;
  var skip  = req.param('skip')  ? Number(req.param('skip'))  : 0;
    
  db.getMessages(limit, skip, function(messages){
    res.json(messages);
  });
  
};


// publica un nuevo mensaje
var postNewMessage = function (req, res) {
  
  var msg = req.body;
      msg.timestamp = new Date().toISOString();
  
  db.addMessage(msg); //OJO, no empleamos callback, funcionamiento en paralelo. (202 aceptado)
  
  res.status(202);
  res.send();
};



//exports
var exports = module.exports = {};
    exports.postNewMessage = postNewMessage;
    exports.getAllMessages = getAllMessages;