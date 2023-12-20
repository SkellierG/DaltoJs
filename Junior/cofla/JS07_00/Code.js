 //utilities 

let br = `<br><br>`;

//	division

//for (let i = 0; i < 6; i++) {
//	document.write(br);
//}

//problema

let alumnos = prompt("¿cuantos alumnos hay?");
let dias = prompt("¿cuantos dias son?");
let maxAusente = 0.10;
let pDias = dias * maxAusente;

let totalAlumnos = [];

for (var i = 0; i < alumnos; i++) {
	totalAlumnos[i] = [(i + 1) + ". " + prompt("Nombre del alumno " + (i +1)), 0, 0];
}

const asistencia = (nombre, asistencia, falta) => {
	let presencia = prompt(nombre + ` (dia ${x + 1}) (p: presente, a: ausente)`);
	if (presencia == "p" || presencia == "P") {
		totalAlumnos[i][1]++;
	} else if (presencia == "a" || presencia == "A") {
		totalAlumnos[i][2]++;
	} else {
		alert("Undefined (sera tomado como falta)");
		totalAlumnos[i][2]++;
	}
}

for (i = 0; i < alumnos; i++) {
	for (var x = 0; x < dias; x++) {
		asistencia(totalAlumnos[i][0]);
	}
	let titulo = `<h3>${totalAlumnos[i][0]}</h3><br><h3>asistencias: ${totalAlumnos[i][1]}</h3><br><h3>faltas: ${totalAlumnos[i][2]}</h3><br>`;
	if (totalAlumnos[i][2] > pDias) {
		document.write(`<h2 class = "reprovado">Reprovado<h2>` + titulo + br + br);
	} else {
		document.write(titulo + br + br);
	}
}