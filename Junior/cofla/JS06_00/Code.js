//utilities 

let br = `<br><br>`;

//	division

//for (let i = 0; i < 6; i++) {
//	document.write(br);
//}

//problema

let gratis = true;

//let name = prompt("cual es tu nombre?");
//let edad = prompt("que edad tenes?");


//la funcion macro

const chequeoEdad = (nombre, anos, horario) => {

	//outputs

	let menorEdad = `Menor de edad! ${nombre} NO PUEDES PASAR`;
	let entradaGratis = `Entrada gratis, BIENVENIDO ${nombre}`;
	let entradaPagada = `Entrada pagada, BIENVENIDO ${nombre}`;
	let horaDeLlegada = ` (horario de llegada ${horario}hrs)`;
	let horaEntrada = `Fuera de horario, ${nombre} ENTRA ENTRE LAS 22 a 7hrs`

	//funcion determinante de outputs

	const output = () => {
		if (gratis == true && horario > 2 && horario <= 7) {
			gratis = false;
			document.write(entradaGratis + horaDeLlegada + br);
		} else {
			document.write(entradaPagada + horaDeLlegada + br);
		}
	}

	//si es menor de edad y control de horarios

	if (anos < 18) {
		document.write(menorEdad + horaDeLlegada + br);
	} else {
		if (horario >= 0 && horario < 7) {
			output();
		} else if (horario >= 22 && horario < 24) {
			output();
		} else {
			document.write(horaEntrada + horaDeLlegada + br);
		}
		
	}
}

//datos de cada individuo

//let nombres = ["Benja", "Pedro", "Juan", "Franco", "Adolf", "Winston"];

//let edades = [14, 18, 21, 19, 17, 24];

//let horarios = [1, 0, 8, 4, 2, 3];

//for (personas of nombres) {
//	chequeoEdad(nombres[a], edades[a], horarios[a]);
//	a++
//}

let nombres = [];

let edades = [];

let horarios = [];

let cantidad = prompt("¿Cuantas personas son?");


for (let i = 0; i < cantidad; i++) {
	nombres[i] = `numero ${i + 1}`;
	edades[i] = 0;
	horarios[i] = 0;
}

for (let i = 0; i < cantidad; i++) {

	let prompt1 = `nombre de la ${i + 1}° persona`;
	let prompt2 = `edad de la ${i + 1}° persona`;
	let prompt3 = `horario de llegada de la ${i + 1}° persona (formato 24hrs)`;

	let nombrePrompt = prompt(prompt1);
	let edadPrompt = prompt(prompt2);
	let horarioPrompt = prompt(prompt3);

	nombres[i] = nombrePrompt;
	edades[i] = edadPrompt;
	horarios[i] = horarioPrompt;
}


for (personas in nombres) {
	
	chequeoEdad(nombres[personas], edades[personas], horarios[personas]);
}
