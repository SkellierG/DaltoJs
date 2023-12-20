 //utilities 

let br = `<br><br>`;

//	division

//for (let i = 0; i < 6; i++) {
//	document.write(br);
//}

//problema


//ELEMENTOS QUE DEVUELVEN UN RESULTADO


/*  concat 
	junta dos cadenas de texto en una
*/

let cadenaConcat0 = "cadena de prueba";

let cadenaConcat1 = " y  esta es la otra cadena";

let resultadoConcat = cadenaConcat0.concat(cadenaConcat1);

document.write(resultadoConcat);
document.write(br);

/*  startsWith
	si una cadena empieza con los mismos caracteres
	es igual a true si es lo contrario es false
*/
//true
let cadenaStartsWith0 = "Prueba";

let cadenaStartsWith1 = "Prueba";

let resultadoStartsWith0 = cadenaStartsWith0.startsWith(cadenaStartsWith1);

document.write(resultadoStartsWith0 + `<br>`);

//false

let cadenaStartsWith2 = "Prueba";

let cadenaStartsWith3 = "esto es falso";

let resultadoStartsWith1 = cadenaStartsWith2.startsWith(cadenaStartsWith3);

document.write(resultadoStartsWith1);
document.write(br);

/*	endsWith
	lo mismo que startsWith per con la letra del final
*/

/*	includes
	si una cadena puede encontrarse dentro 
	de otra cadena es true si no es false
*/

let cadenaIncludes0 = "Prueba* real g*ente";

let cadenaIncludes1 = " real g";

let resultadoIncludes = cadenaIncludes0.includes(cadenaIncludes1);

document.write(resultadoIncludes);
document.write(br);

/*	indexOf
	es un includes pero que muestra la posicion
	de donde se encuentra la primera coorelacion en ves de true o false
*/
//                   "0123456          "
let cadenaIndexOf0 = "Prueba real gente";

let cadenaIndexOf1 = " real g";

let resultadoIndexOf0 = cadenaIndexOf0.indexOf(cadenaIndexOf1);

//muestra el numero 6
document.write(resultadoIndexOf0 + `<br>`);

//si no hay coorelacion devuelve -1

let cadenaIndexOf2 = "Prueba real gente";

let cadenaIndexOf3 = "no hay pe";

let resultadoIndexOf1 = cadenaIndexOf2.indexOf(cadenaIndexOf3);

document.write(resultadoIndexOf1);
document.write(br);

/*	lastIndexOf
	lo mismo que un indexOf pero devuelve la posicion
	de la primera letra en la ultima coorelacion
*/

//si no hay coorelacion devuelve -1

//(f en hexadecimal es 15)
//						 "0123456789abcdef    "
let cadenaLastIndexOf0 = "Prueba Prueba Prueba";

let cadenaLastIndexOf1 = "Prueba";

let resultadoLastIndexOf = cadenaLastIndexOf0.lastIndexOf(cadenaLastIndexOf1);

//devuelve 14(=e)
document.write(resultadoLastIndexOf);
document.write(br);


//ELEMENTOS NO ESTANDAR


/*padStart
	rellena desde el inicio una cadena de texto
	con la cantidad de caracteres que se especifique
	hasta conseguir el total de caracteres
*/

let cadenaPadStart0 = "Texto"; //texto inicial

let cadenaPadStart1 = 33; //cantidad total de caracteres

let cadenaPadStart2 = "start"; //con que rellenar caracteres faltantes

let resultadoPadStart = cadenaPadStart0.padStart(cadenaPadStart1, cadenaPadStart2);

document.write(resultadoPadStart);
document.write(br);

/*padEnd
	rellena desde el final una cadena de texto
	con la cantidad de caracteres que se especifique
	hasta conseguir el total de caracteres
*/

let cadenaPadEnd0 = "Texto"; //texto inicial

let cadenaPadEnd1 = 41; //cantidad total de caracteres

let cadenaPadEnd2 = "end"; //con que rellenar caracteres faltantes

let resultadoPadEnd = cadenaPadEnd0.padEnd(cadenaPadEnd1, cadenaPadEnd2);

document.write(resultadoPadEnd);
document.write(br);

//(fusiom)

let fusion0 = "Texto";

let fusion1 = 15;

let fusion2 = ">";

let fusion3 = "<";

let fusion = (fusion0.padStart(fusion1, fusion2)).padEnd(fusion1 + 10, fusion3);

document.write(fusion);
document.write(br);

/*	repeat
	repite una cadena de texto las veces que se indique
*/

let cadenaRepeat0 = "Texto";

let cadenaRepeat1 = 5;

let resultadoRepeat = cadenaRepeat0.repeat(cadenaRepeat1);

document.write(resultadoRepeat);
document.write(br);