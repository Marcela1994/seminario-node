/*
 Breve introducción a node como servidor web
 -------------------------------------------------------------
 
 Hola Mundo en Express
 
*/

var express     = require('express');
var bodyParser  = require('body-parser');
var app         = express();

//configuramos la aplicacion 
app.use(bodyParser.urlencoded({ extended: true }));   //nos permite obtener urlencode data desde body
app.use(bodyParser.json());                           //nos permite obtener json data desde body

// rutas de nuestro API
// ==============================================

var api = express.Router();  //creamos un router para el api o "mini-app"

api.get('/messages', function (req, res) {
  
  var msg1 = { username: "findemor",  message: "soy el primero del chat!",  timestamp: new Date().toISOString() };
  var msg2 = { username: "daniel",    message: "por poco tiempo...",        timestamp: new Date().toISOString() };
  var messages = [ msg1, msg2 ];
  
  res.json(messages);
});

api.post('/messages', function (req, res) {
  
  var msg = req.body;
      msg.timestamp = new Date().toISOString();
  
  //save msg
  res.status(202);
  res.send();
});

// cargamos el router

app.use('/api', api);

// Servidor
// ==============================================
var port = process.env.PORT || 8000;
var server = app.listen(port, function() {
  console.log('Servidor preparado en http://localhost:%s', server.address().port);
});