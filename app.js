/*
 Breve introducción a funciones y asíncronicidad en javascript
 -------------------------------------------------------------
 
 Aplanamos el codigo anterior para mejorar su calidad
 
*/

var async 	= require('async');
var numbers = [1,2,3,4,5];

// nuestro programa
main();

/**
 * Programa principal
 */
function main(){	
	//codigo nuevo
	async.each(
		numbers, 
		asyncReadFile,
		processEndProgram
	);
};

/**
 * Leemos el fichero correspondiente al numero especificado
 * @param {Number} number
 */
function readFile(number, callback){
	var latency = Math.random() * 500; //0-500 ms
	//simulamos latencia I/O a disco
	setTimeout(function ioRead(){
		console.log('fichero ' + number + ' leido en ' + latency + 'ms');
		callback(number);
	}, latency);	
};

/**
 * Leemos de forma asíncrona un fichero e invocamos el callback al finalizar
 * @param {Number} number
 * @param callback
 */
function asyncReadFile(number, callback) {
	readFile(number, function singleReadFinished(){
		processSingleRead(number, callback);
	});
};

/**
 * Procesamiento que se ejecuta cuando finaliza la lectura
 * @param {Number} n
 * @param callback
 */
function processSingleRead(n, callback){
	console.log('Hemos finalizado la lectura del fichero ' + n);
	callback();
}

/**
 * Realizamos acciones una vez finalizada la ejecución del programa
 */
function processEndProgram() {
	console.log('El conjunto de acciones ha finalizado en paralelo');
}



