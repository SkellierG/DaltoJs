//utilities 

let br = `<br><br>`;

//	division

//for (let i = 0; i < 6; i++) {
//	document.write(br);
//}

//problema
/*	divdir las tareas de cofla en un periodo de 2 semanas en los que trabaja 8 horas al dia: (240max)
	24h 	estudiar			1440m	205m
	24h 	trabajos estudios	1440m	205m
	56h 	trabajar			3360m	480m
	8h 		tareas de la casa 	480m	70m
	112h 	total 				6720m	960m
	56h		descanso(libre)		3360m	480m
	168h 	semana 				10080m	1440m
	
	hacer:
	organizar las actividades diarias
	utilizar la consola
	el tiempo por cada tarea no debe superar las 4 horas
*/

const tareas = {
	estudios: "Estudiar 205 minutos",
	trabajar0: "Trabajar 240 minutos",
	descansar0: "Descansar 240 minutos",
	trabajar1: "Trabajar 240 minutos",
	casa: "Realizar tareas del hogar 70 minutos",
	tarea: "Realizar tareas de estudio 205 minutos",
	descansar1: "Descansar 240 minutos"
}

console.group(`%cTareas diarias`, "color: yellow");
for (let i = 1; i < 15; i++) {
	if (i === 1 || i === 8) {
		let semana = 1;
		if (i === 8) {
			semana = 2;
		}
		console.group(`%cSemana ${semana}`, "color: orange");
	}
	console.groupCollapsed(`%cDia ${i}`, "color: pink");
	console.log(`%c${tareas.estudios}`, "color: lightgreen");
	console.log(`%c${tareas.trabajar0}`, "color: lightgreen");
	console.log(`%c${tareas.descansar0}`, "color: lightgreen");
	console.log(`%c${tareas.trabajar1}`, "color: lightgreen");
	console.log(`%c${tareas.casa}`, "color: lightgreen");
	console.log(`%c${tareas.tarea}`, "color: lightgreen");
	console.log(`%c${tareas.descansar1}`, "color: lightgreen");
	console.groupEnd();
	if (i === 7 || i === 14) {
		console.groupEnd();
	}
}
console.groupEnd();