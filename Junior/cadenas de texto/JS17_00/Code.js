 //utilities 

let br = `<br><br>`;

//	division

//for (let i = 0; i < 6; i++) {
//	document.write(br);
//}

//problema

//CREAR NUEVOS OBJETOS EN BASE A ARRAYS

/*	join
	crea una cadena de texto en base a un array
	ademas de poder remplazar las comas por otros
	caracteres
*/

let arrayJoin = ["ejemplo1","ejemplo2","ejemplo3","ejemplo4","ejemplo5"];

document.write(arrayJoin + `<br>`);

let resultadoJoin = arrayJoin.join(`<br> elemento: `);

document.write(`elemento: ` + resultadoJoin + `<br>`);
document.write(arrayJoin + br);

/*	slice
	da un array con los elementos de otro segun
	el valor que se pida
*/

let arraySlice = ["ejemplo1","ejemplo2","ejemplo3","ejemplo4","ejemplo5"];

document.write(arraySlice + `<br>`);

let resultadoSlice = arraySlice.slice(3, 4);

document.write(resultadoSlice + `<br>`);
document.write(arraySlice + br);

/*	includes
	si hay un elemento con ese contenido
*/

let arrayIncludes = ["ejemplo1","ejemplo2","ejemplo3","ejemplo4","ejemplo5"];

document.write(arrayIncludes + `<br>`);

let resultadoIncludes = arrayIncludes.includes("ejemplo2");

document.write(resultadoIncludes + `<br>`);
document.write(arrayIncludes + br);

/*	indexOf
	lastIndexOf
	toString
	funcionan igual
*/

//DE REPETICION

/*	filter
	se repite por casa elemento del array y crea
	uno nuevo von los valores que se
	deriven de la accion
*/

let arrayFilter0 = ["ejemplo1","ejemplo2","ejemplo3","ejemplo4","ejemplo5"];

arrayFilter0.forEach(function mostrarArray(filter){
	document.write(filter + `<br>`);
});

arrayFilter0.filter(array => document.write(array + `<br>`));

document.write(br);

//ejemplo2 (crea un array)

let arrayFilter1 = ["non","estesihola","non","estesis"];

let resultadoFilter = arrayFilter1.filter(texto => texto.length > 4);

document.write(resultadoFilter + br);

/*	forEach
	se realiza la accion por cada elemento del array
*/

let arrayForEach = ["ejemplo1","ejemplo2","ejemplo3","ejemplo4","ejemplo5"];

arrayForEach.forEach(function mostrarArray(each){
	document.write(each + `<br>`);
});

arrayForEach.filter(each1 => document.write(each1 + `<br>`));

document.write(br);