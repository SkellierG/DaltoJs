//utilities
let br = `<br>`;

//	separacion

//for (let i = 0; i < 6; i++) {
//	document.write(br);
//}

//funciones

//function Saludo() {
//
//	let respuesta = prompt("¿Hola como estas?   (bien, mal)");
//
//	if (respuesta === "bien") {
//	alert("Me alegro mucho");
//	} else {
//		alert("Que pena");
//	}
//}
//
//Saludo();

function retorno() {
	return "todo bien";
}

retorno();

let datoDeFun = retorno();

document.write(datoDeFun + br);

//	separacion

for (let i = 0; i < 6; i++) {
	document.write(br);
}

//parametros

let num1 = 12;
let num2 = 22;

function suma(argument) {
	let sum = num1 + num2;
	document.write(sum + br);
}

suma();
suma();
suma();
suma();

//	separacion

for (let i = 0; i < 6; i++) {
	document.write(br);
}

//solucion

function sumaCorregida(numero1, numero2) {

	let suma = numero1 + numero2;
	document.write(suma + br);
	
}


sumaCorregida(12, 22);
sumaCorregida(23, 31);
sumaCorregida(11, 45);
sumaCorregida(56, 34);

//	separacion

for (let i = 0; i < 6; i++) {
	document.write(br);
}

function sumaReturn(numer1, numer2) {

	let sus = numer1 + numer2;
	return sus;
}

let resultado = sumaReturn(23, 45);

document.write(resultado);

//	separacion

for (let i = 0; i < 6; i++) {
	document.write(br);
}

//pruebas

let nombre = prompt("¿Cual es tu nombre?");

function saludoLoco(name) {
	let frase = `Hola ${name}, ¿como estas?`;
	document.write(frase);
}

saludoLoco(nombre);

//	separacion

for (let i = 0; i < 6; i++) {
	document.write(br);
}

//otras cosas

//const saludaso = function(nombraso) {
//	let frasasa = `${nombraso} sos un negro`;
//	document.write(frasasa);
//}

//const saludaso = (nombraso)=>{
//	let frasasa = `${nombraso} sos un negro`;
//	document.write(frasasa);
//}

//const saludaso = nombraso=>{
//	let frasasa = `${nombraso} sos un negro`;
//	document.write(frasasa);
//}

const saludaso2 = (nombra) => document.write(`${nombra} sos un negro`);

//saludaso(nombre);
saludaso2(nombre);

//	separacion

for (let i = 0; i < 6; i++) {
	document.write(br);
}

//pruebas locas (soy la verga)

let datos0 = [12, 23, 11, 56];
let datos1 = [22, 31, 45, 34];

let a = 0;
let b = 0;

for (info of datos0) {
	
	sumaCorregida(datos0[a], datos1[b]);
	a++
	b++
}

//	pie de pagina

for (let i = 0; i < 50; i++) {
	document.write(br);
}