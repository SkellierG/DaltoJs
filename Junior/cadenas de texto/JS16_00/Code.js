 //utilities 

let br = `<br><br>`;

//	division

//for (let i = 0; i < 6; i++) {
//	document.write(br);
//}

//problema

//MODIFICAR UN ARRAY

/*	pop
	elimina el ultimo elemento y lo devuelve
*/

let arrayPop = ["ejemplo1","ejemplo2","ejemplo3"];

document.write(arrayPop + `<br>`);

let resultadoPop = arrayPop.pop();

document.write(resultadoPop + `<br>`);
document.write(arrayPop + br);

/*	shift
	elimina el primer elemento y lo devuelve
*/

let arrayShift = ["ejemplo1","ejemplo2","ejemplo3"];

document.write(arrayShift + `<br>`);

let resultadoShift = arrayShift.shift();

document.write(resultadoShift + `<br>`);
document.write(arrayShift + br);

/*	push
	agrega un elemento al final del array
	y devuelve su valor
*/

let arrayPush = ["ejemplo1","ejemplo2","ejemplo3"];

document.write(arrayPush + `<br>`);

let resultadoPush = arrayPush.push("ejemplo4", "ejemplo 5");

document.write(resultadoPush + `<br>`);
document.write(arrayPush + br);

/*	unshift
	agrega un elemento al inicio del array
	y devuelve su valor
*/

let arrayUnshift = ["ejemplo1","ejemplo2","ejemplo3"];

document.write(arrayUnshift + `<br>`);

let resultadoUnshift = arrayUnshift.unshift("ejemplo-1","ejemplo0");

document.write(resultadoUnshift + `<br>`);
document.write(arrayUnshift + br);

/*	reverse
	invierte el array
*/

let arrayReverse = ["ejemplo1","ejemplo2","ejemplo3"];

document.write(arrayReverse + `<br>`);

let resultadoReverse = arrayReverse.reverse();

document.write(resultadoReverse + `<br>`);
document.write(arrayReverse + br);

/*	sort
	ordena los elementos del array
	localmente y los devuelve ordenados
	en orden lexicografico
*/

let arraySort = ["ejemplo5","ejemplo2","ejemplo7"];

document.write(arraySort + `<br>`);

let resultadoSort = arraySort.sort();

document.write(resultadoSort + `<br>`);
document.write(arraySort + br);

/*	splice
	reemplaza los elementos segun la posiocion que 
	se a indicado ademas de devolver los 
	elemtos eliminados/reemplazados
*/

let arraySplice = ["ejemplo1","ejemplo2","ejemplo3", "ejemplo4"];

document.write(arraySplice + `<br>`);

//0 es el inicio del array
/*let spliceValorPosicion = 0;*/
let spliceValorPosicion = 1;

let spliceValoEliminar = 1;
//-1 es el final del array
/*let spliceValorPosicion = -1;*/
let resultadoSplice = arraySplice.splice(spliceValorPosicion, spliceValoEliminar, "splice1", "splice2");

document.write(resultadoSplice + `<br>`);
document.write(arraySplice + br);