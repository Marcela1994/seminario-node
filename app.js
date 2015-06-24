/*
 Breve introducción a node como servidor web
 -------------------------------------------------------------
 
 Hola Mundo en Express
 
*/

var express = require('express');
var app     = express();

// Mapa de rutas
app.get('/', function (req, res) {
  res.send("Bienvenido a express");
});

// Servidor
var server = app.listen(8000, function() {
  console.log('Servidor preparado en http://localhost:%s', server.address().port);
});