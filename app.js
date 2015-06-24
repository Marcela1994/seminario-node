/*
 Breve introducción a funciones y asíncronicidad en javascript
 -------------------------------------------------------------
 
 Ejemplo real: descargar paginas de resultado de busqueda de google
 
*/

var async 		= require('async');
var generator	= require('./bll/generator');
var downloader	= require('./bll/downloader');

//fichero de configuracion
var config  = require('./config.json');


// nuestro programa
main();

/**
 * Programa principal
 */
function main(){	
	
	var sites = generator.generateSites(config.query);
	
	async.each(
		sites, 
		downloader.downloadSingleUri,
		processEndProgram
	);
};



/**
 * Realizamos acciones una vez finalizada la ejecución del programa
 */
function processEndProgram() {
	console.log('Se descargaron todas las páginas');
}



