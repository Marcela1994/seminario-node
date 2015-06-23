/*
 Breve introducción a funciones y asíncronicidad en javascript
 -------------------------------------------------------------
 
 Como manejar ejecución en paralelo con el módulo async
 
*/

var async 	= require('async');
var numbers = [1,2,3,4,5];

// nuestro programa
main();

/**
 * Programa principal
 */
function main(){
	
	//codigo anterior
	/*
	numbers.forEach(function read(number){
	  readFile(number, endRead);
	});
	*/
	
	//codigo nuevo
	async.each( //vs eachSeries
		numbers, 
		function read(number, callback){
			readFile(number, function singleReadFinished(){
				endRead(number);
				callback();
			});
		},
		function done() {
			console.log('El conjunto de acciones ha finalizado en paralelo');
		}
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
 * Procesamiento que se ejecuta cuando finaliza la lectura
 */
function endRead(n){
	console.log('Hemos finalizado la lectura del fichero ' + n);
}



