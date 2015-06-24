
//fichero de configuracion
var config  = require('./../config.json');

/**
 * Genera un array con los sitios web que queremos descargar
 * @param {String} query
 */
var generateSites = function generateSites(query){
	var sites = [];
	for(var page = 0; page < config.pagesToDownload; page++) {
		sites.push({ 
				uri: 	"https://www.google.es/search?q=" + query + "&start=" + (page * 10),
				page:	page
			});
	}
	return sites;
}


//exportamos las funciones publicas
var exports = module.exports = {};
	exports.generateSites = generateSites;