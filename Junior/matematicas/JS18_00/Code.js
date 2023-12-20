 //utilities 

let br = `<br><br>`;

//	division

//for (let i = 0; i < 6; i++) {
//	document.write(br);
//}

//problema

//

let raizCuadrada = Math.sqrt(49);

document.write(raizCuadrada + br);

//

let raizCubica = Math.cbrt(49);

document.write(raizCubica + br);

//

let numeroMayor = Math.max(34, 54, 3, 76, 81, 23, 41, 92);

document.write(numeroMayor + br);

//

let numeroMenor = Math.min(34, 54, 3, 76, 81, 23, 41, 92);

document.write(numeroMenor + br);

//

//aleatorio entre 0 y 1
let aleatorio0 = Math.random();

document.write(aleatorio0 + br);

//ejemplo chafa
let aleatorio1 = Math.random()*100;
aleatorio1 = aleatorio1.toString();
let ale = aleatorio1[0] + aleatorio1[1];
if (aleatorio1[1] == ".") {
	ale = aleatorio1[0];
}

document.write(ale + br);

//

let redondear = Math.round(3.4)

document.write(redondear + br);

//

let redondearHaciaAbajo = Math.floor(3.9999)
document.write(redondearHaciaAbajo + br);

//

let redondeo4bytes = Math.fround(3.7555555555555555555555555555555);
document.write(redondeo4bytes + `<br>`);

document.write(3.75555555555555555555555555555555555555 + br);

//

let eliminarDecimales = Math.trunc(3.87658745874);

document.write(eliminarDecimales + br);

//

let numeroPi = Math.PI;

document.write(numeroPi + br);

//

let numeroEuler = Math.E;

document.write(numeroEuler + br);