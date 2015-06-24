/*
 Breve introducción a funciones y asíncronicidad en javascript
 -------------------------------------------------------------
 
 Aplanamos el codigo anterior para mejorar su calidad
 
*/

var async 	= require('async');
var request = require('request');
var fs		= require('fs');
var mkdirp 	= require('mkdirp');

var downloadDirectory 	= './downloads';
var pagesToDownload 	= 4;


// nuestro programa
main();

/**
 * Programa principal
 */
function main(){	
	
	var sites = generateSites("buenos aires"); //query que vamos a buscar
	
	async.each(
		sites, 
		downloadSingleUri,
		processEndProgram
	);
};

/**
 * Genera un array con los sitios web que queremos descargar
 * @param {String} query
 */
function generateSites(query){
	var sites = [];
	for(var page = 0; page < pagesToDownload; page++) {
		sites.push({ 
				uri: 	"https://www.google.es/search?q=" + query + "&start=" + (page * 10),
				page:	page
			});
	}
	return sites;
}

/**
 * Descarga una pagina web en la memoria
 * @param {Object} site
 * @param callback
 */
function downloadSingleUri(site, callback){
	request(
		{ uri: site.uri }
		, function processSingleUri(error, response, body) { 
			saveOnDisk(site, error, response, body, callback);
		});
}

/**
 * Guarda una pagina web en un fichero de disco
 */
function saveOnDisk(site, error, response, body, callback) {
	if (!error && response.statusCode < 400) {
		mkdirp(downloadDirectory, function saveFile(){
			fs.writeFile(downloadDirectory + '/page-'+site.page+'.html', body, function (err) {
				if (!err) console.log('Site '+ site.page+': Guardado en disco');
				else console.log('Site '+ site.page+': No se pudo guardar en disco '+ err);
				callback();
			});
		});
	} else {
		console.log('Site '+ site.page+': No se puede guardar en disco ' + error);
		callback();
	}
}

/**
 * Realizamos acciones una vez finalizada la ejecución del programa
 */
function processEndProgram() {
	console.log('Se descargaron todas las páginas');
}



