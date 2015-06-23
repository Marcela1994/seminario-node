/*
 Breve introducción a funciones y asíncronicidad en javascript
 -------------------------------------------------------------
 
 ¿Que ocurre si damos por sentado que el programa va a esperar a que se lean los ficheros?
 
*/

/* código nuevo */

var numbers = [1,2,3,4,5];

// nuestro programa
main();

/**
 * Programa principal
 */
function main(){
	numbers.forEach(readFile);
	console.log('Hemos leido todos los ficheros');
};

/**
 * Leemos el fichero correspondiente al numero especificado
 * @param {Number} number
 */
function readFile(number){
	var latency = Math.random() * 500; //0-500 ms
	//simulamos latencia I/O a disco
	setTimeout(function (){
		console.log('fichero ' + number + ' leido en ' + latency + 'ms');
	}, latency);	
};



