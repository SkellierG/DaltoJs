 //utilities 

let br = `<br><br>`;

//	division

//for (let i = 0; i < 6; i++) {
//	document.write(br);
//}

//problema

//ELEMENTOS QUE TRANSFORMAN LA CADENA

/*	split
	divide la cadena segun lo establecido
	para convertirlo em un Array[]
*/

let cadenaSplit0 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit";

let cadenaSplit1 = " "; //referencia para dividir

let resultadoSplit0 = cadenaSplit0.split(cadenaSplit1);

document.write(resultadoSplit0 + `<br>`);
document.write(resultadoSplit0[0] + `<br>`);
document.write(resultadoSplit0[1] + `<br>`);
document.write(resultadoSplit0[2] + `<br>`);
document.write(resultadoSplit0[3]);

document.write(br);

//uso en aqrrays

let cadenaSplit2 = "esto,es,un,ejemplo,de,array";

let cadenaSplit3 = ","; //referencia para dividir

let resultadoSplit1 = cadenaSplit2.split(cadenaSplit3);

document.write(resultadoSplit1);

document.write(br);

//destruye la referencia de divisiom

let cadenaSplit4 = "hola nan como nan estas";

let cadenaSplit5 = "nan"; //referencia para dividir

let resultadoSplit2 = cadenaSplit4.split(cadenaSplit5);

document.write(resultadoSplit2);

document.write(br);

/*	substring
	determina el inicio y final de una cadena en cualquier
	posicion que se desee
*/

let cadenaSubstring0 = "0123456789abcdef";

let cadenaSubstring1 = 4; //lugar de inicio

let cadenaSubstring2 = 11; //lugar de termino

let resultadoSubstring = cadenaSubstring0.substring(cadenaSubstring1, cadenaSubstring2);

document.write(resultadoSubstring);

document.write(br);

/*	toLoweCase
	convierte una cadena a minuscula
*/

let cadenaToLowerCase = "LOREM ipsum DOLOR SIT AMET";

let resultadoToLowerCase = cadenaToLowerCase.toLowerCase();

document.write(resultadoToLowerCase);
document.write(br);

/*	toUpperCase
	convierte una cadena a minuscula
*/

let cadenaToUpperCase = "Lorem IPSUM dolor sit amet";

let resultadoToUpperCase = cadenaToUpperCase.toUpperCase();

document.write(resultadoToUpperCase);
document.write(br);

/*	toString
	convierte una cadena en texto
*/


//ejemplo1

let cadenaToString0 = 100;

let resultadoToString0 = cadenaToString0;

let cadenaToString1 = 100;

let resultadoToString1 = cadenaToString1.toString();

//ejemplo2

let cadenaToString2 = ["ejemplo", "nigga"];

let resultadoToString2 = cadenaToString2;

let cadenaToString3 = ["ejemplo", "nigga"];

let resultadoToString3 = cadenaToString3.toString();

//ejemplo1

document.write(2 + resultadoToString0 + `<br>`);
document.write(2 + resultadoToString1 + br);

//ejemplo2

document.write(resultadoToString2[0] + `<br>`);
document.write(resultadoToString3[0] + `<br>`);
document.write(resultadoToString2[1] + `<br>`);
document.write(resultadoToString3[8]);
document.write(br);

/*	trim
	elimina todos los espacios en una cadena
*/

let cadenaTrim0 = "   hola     ";

let resultadoTrim0 = cadenaTrim0

document.write(resultadoTrim0.length + `<br>`);

let cadenaTrim1 = "   hola     ";

let resultadoTrim1 = cadenaTrim0.trim();

document.write(resultadoTrim1.length);
document.write(br);

/*	trimStart
	elimina todos los espacios al inicio de una cadena
*/

let cadenaTrimStart0 = "   hola     ";

let resultadoTrimStart0 = cadenaTrim0

document.write(resultadoTrimStart0.length + `<br>`);

let cadenaTrimStart1 = "   hola     ";

let resultadoTrimStart1 = cadenaTrimStart0.trimStart();

document.write(resultadoTrimStart1.length);
document.write(br);

/*	trimEnd
	elimina todos los espacios al final de una cadena
*/

let cadenaTrimEnd0 = "   hola     ";

let resultadoTrimEnd0 = cadenaTrimEnd0

document.write(resultadoTrimEnd0.length + `<br>`);

let cadenaTrimEnd1 = "   hola     ";

let resultadoTrimEnd1 = cadenaTrimEnd0.trimEnd();

document.write(resultadoTrimEnd1.length);
document.write(br);

/*	valueOf
	devuelve el valor primitivo de una cadena
*/

let cadenaValueOf0 = 9;

let resultadoValueOf0 = cadenaValueOf0.valueOf();

document.write(resultadoValueOf0 + 2);
document.write(br);