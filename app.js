/*
 Breve introducción a funciones y asíncronicidad en javascript
 -------------------------------------------------------------
 
 Una primera aproximación para manejar callbacks al finalizar la lectura
 
*/

/* código nuevo */

var numbers = [1,2,3,4,5];

// nuestro programa
main();

/**
 * Programa principal
 */
function main(){
	numbers.forEach(function read(number){
		readFile(number, endRead);
	});
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



