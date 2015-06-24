/*
 Breve introducción a node como servidor web
 -------------------------------------------------------------
 
 Hola Mundo en HTTP
 
*/

var http = require('http');

// Configuramos el servidor, que reponderá a todas las peticiones
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Bienvenido");
  //response.end("Bienvenido a " + request.url);
});

// Escuchamos en el puerto 8000
server.listen(8000);

// Put a friendly message on the terminal
console.log("Servidor preparado en http://localhost:8000/");