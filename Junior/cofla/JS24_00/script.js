//utilities 

let br = `<br><br>`;

//	division

//for (let i = 0; i < 6; i++) {
//	document.write(br);
//}

//problema
/*	pedir datos:
	90% asistencia
	promedio por materia minimo 7/10
	75%trabajos entregados
	exigencias:
	ver si aprueba o no
	Mostrarlo con colores en la consola
	Todo esto como console.table
*/
				//materia 			asistencia	promedio	trabajos
const cofla = [	["MatematicasI",	92,			9,			46],
				["MatematicasII",	34,			3,			91],
				["Lengua",			92,			4,			32],
				["Ingles",			91,			7,			98],
				["Ciencias",		21,			8,			72]
];

/*console.group("%cCofla", "color: pink");

function test(){
	for (let i = 1; i < cofla[0].length; i++) {
		switch(i) {
			case 1:
				console.group("%cAsistencia", "color: purple");
				break;
			case 2:
				console.groupEnd();
				console.group("%cPromedio", "color: purple");
				break;
			case 3:
				console.groupEnd();
				console.group("%cTrabajos", "color: purple");
				break;
		}
		for (let k = 0; k < cofla.length; k++) {
			check(i, k)
		}
	}
	console.groupEnd();
}

function check(min, materia){
	let valor = 0;
	switch(min) {
		case 1:
			valor = 90;
			break;
		case 2:
			valor = 7;
			break;
		case 3:
			valor = 75;
			break;
	}
	console.groupCollapsed(`%c${cofla[materia][0]}`,"color: orange")
	if (cofla[materia][min] < valor){
		console.log("%cReprobaste","color: red");
	}
	else {
		console.log("%cAprobaste","color: lightGreen");
	}
	console.groupEnd();
}*/

console.group("%cCofla", "color: pink");

function test(){
	for (let i = 0; i < cofla.length; i++) {
		console.group(`%c${cofla[i][0]}`,"color: purple");
		if (cofla[i][1] < 90 || cofla[i][2] < 7 || cofla[i][3] < 75) {
			console.log("%cReprobaste","color: red");
		}
		else {
			console.log("%cAprobaste","color: lightGreen");
		}
		for (let k = 1; k < cofla[i].length; k++) {
			check(i, k)
		}
		console.groupEnd();
	}
	console.groupEnd();
}

function check(materia, min){
	let valor = 0;
	let tipo = "";
	switch(min) {
		case 1:
			valor = 90;
			tipo = "Asistencia";
			break;
		case 2:
			valor = 7;
			tipo = "Promedio";
			break;
		case 3:
			valor = 75;
			tipo = "Trabajos";
			break;
	}
	console.groupCollapsed(`%c${tipo}`,"color: orange")
	if (cofla[materia][min] < valor){
		console.log("%cReprobaste","color: red");
	}
	else {
		console.log("%cAprobaste","color: lightGreen");
	}
	console.groupEnd();
}

test();

console.groupEnd();