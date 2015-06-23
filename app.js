/*
 Breve introducción a funciones y asíncronicidad en javascript
 -------------------------------------------------------------
 
 El mismo ejemplo un poco mejor escrito 
 
*/

/* código anterior

[1,2,3,4,5].forEach(function(number) {
	console.log('n ' + number);
});

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
	console.log('n ' + number);
};


