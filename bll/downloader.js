
var request = require('request');
var fs		= require('fs');
var mkdirp 	= require('mkdirp');

//fichero de configuracion
var config  = require('./../config.json');

/**
 * Descarga una pagina web en la memoria
 * @param {Object} site
 * @param callback
 */
var downloadSingleUri = function downloadSingleUri(site, callback){
	request(
		{ uri: site.uri }
		, function processSingleUri(error, response, body) { 
			saveOnDisk(site, error, response, body, callback);
		});
}


/**
 * Guarda una pagina web en un fichero de disco
 */
var saveOnDisk = function saveOnDisk(site, error, response, body, callback) {
	if (!error && response.statusCode < 400) {
		mkdirp(config.downloadDirectory, function saveFile(){
			fs.writeFile(config.downloadDirectory + '/page-'+site.page+'.html', body, function (err) {
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


// exportamos las funciones publicas

var exports = module.exports = {};
	exports.downloadSingleUri = downloadSingleUri;
	//exports.saveOnDisk = saveOnDisk; //es una funcion privada