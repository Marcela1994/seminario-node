/*
 Breve introducción a funciones y asíncronicidad en javascript
 -------------------------------------------------------------
 
 Simulamos la latencia I/O a disco de lo que supondría la lectura de un fichero
 
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



