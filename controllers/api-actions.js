/* core de la funcionalidad de la aplicación */
var db = require('./../database/manager');


// actions
// ==============================================

// obtiene todos los mensajes desde el api
var getAllMessages = function getAllMessages(req, res) {  
    
  var limit = req.query.limit  ? Number(req.query.limit) : 10;
  var skip  = req.query.skip   ? Number(req.query.skip)  : 0;
    
  db.getMessages(limit, skip, function(messages){
    res.json(messages);
  });
  
};


// publica un nuevo mensaje
var postNewMessage = function postNewMessage(req, res) {
  
  var msg = req.body;
      msg.timestamp = new Date().toISOString();
  
  db.addMessage(msg); //OJO, no empleamos callback, funcionamiento en paralelo. (202 aceptado)
  
  res.status(202);
  res.send();
};



//exports
var exports = module.exports = {};
    exports.getAllMessages = getAllMessages;
    exports.postNewMessage = postNewMessage;