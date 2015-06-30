/*
 Breve introducción a node como servidor web
 -------------------------------------------------------------
 
 Hola Mundo en Express
 
*/

var express     = require('express');
var bodyParser  = require('body-parser');
var config      = require('./config.json');
var app         = express();
var server 		= require('http').createServer(app);
var io 			= require('socket.io')(server);
var bll			= require('./bll/messages');


// routers
// ==============================================
var api         = require('./routers/api');
var web			= require('./routers/web');

// configuramos la aplicacion 
// ==============================================
app.use(bodyParser.urlencoded({ extended: true }));   //nos permite obtener urlencode data desde body
app.use(bodyParser.json());                           //nos permite obtener json data desde body
app.use("/public", express.static(__dirname + '/public'));
app.set('view engine', 'jade');

// rutas
// ==============================================
app.use('/api', api);
app.use('/', 	web);

// socket.io
// ==============================================
io.on('connection', function (socket) {
	socket.on('message', function (message) {
		socket.broadcast.emit('message', message);
		bll.postNewMessage(message);
	});
});

// servidor
// ==============================================
var port = process.env.PORT || config.port;

server.listen(port, function() {
	console.log('Servidor preparado en http://localhost:%s', server.address().port);
});



