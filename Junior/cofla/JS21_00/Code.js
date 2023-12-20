 //utilities 

let br = `<br><br>`;

//	division

//for (let i = 0; i < 6; i++) {
//	document.write(br);
//}

//problebla

/*12 materias ademas de sus respectivos alumnos y profes
profesor asigando y nombres de los alumnos
funcion de en cuantas clases esta cofla
nombes y sus profesosres de cada clase*/

//nombres posibles
let nombresPosibles = ["null", "alberto", "sofia", "gaspar", "fernando", "matias", "martin", "martina", "catalina",
	"carlos", "pedro", "juan", "anastasia", "sonia", "armando", "cristina", "paulina", "cristobal", "matilde", "javier",
	"pancho", "alex", "alexander", "gabriel", "bernardo", "beltran", "agustina", "constanza", "alonso", "luis",
	"marcos", "cofla"];
let nombresMaterias = ["aritmeticaI", "aritmeticaII", "biologia", "fisica", "quimica",
	"lenguaje", "ingles", "aleman", "informatica", "calculo", "filosofia", "economia"];

let clases = [];

function materias(name, teach, students) {
	clases.push({
		nombre: name,	
		profesor: teach,
		alumnos: students
	})
}

//generador de nombres
class Datos {
	//nombre de los alumnos (solo hay un cofla)
	alumno(cantidad){
		let nombres = [];
		let nombresPosiblesLocal = [];
		for (let names in nombresPosibles) {
			nombresPosiblesLocal[names] = nombresPosibles[names];
		};
		for (let i = 0; i < cantidad; i++) {
			let num = numAleatorio.Nombres();
			let nombresPosiblesSlice = nombresPosiblesLocal.slice(num - 1, num)
			while (nombres.includes(nombresPosiblesSlice.toString())) {
				num = numAleatorio.Nombres();
				nombresPosiblesSlice = nombresPosiblesLocal.slice(num - 1, num)
			}
			nombres[i] = nombresPosiblesSlice.toString();
		};
		return nombres;
	};
	//nombre del profesor
	profe(cantidad){
		let nombres = [];
		let nombresPosiblesLocal = []
		for (let names in nombresPosibles) {
			nombresPosiblesLocal[names] = nombresPosibles[names];
		}
		let num = numAleatorio.Nombres();
		while (num == 32 && nombresPosiblesLocal.includes("cofla")) {
			num = numAleatorio.Nombres();
		}
		let nombresPosiblesSlice = nombresPosiblesLocal.slice(num -1, num)
		nombres[0] = nombresPosiblesSlice.toString();
		return nombres;
	}
}

const datos = new Datos;

//generador de numeros aleatorios
class NumAleatorio {
	//para determinar la cantidad de alumnos
	tenToThrirty(){
		let numeroAleatorio = 0;
		while (numeroAleatorio < 10 || numeroAleatorio > 30) {
			numeroAleatorio = Math.floor(Math.random() * 100);
		}
		return numeroAleatorio;
	}
	//para seleccionar los nombres del array
	Nombres(){
		let numeroAleatorio = 0;
		while (numeroAleatorio < 3 || numeroAleatorio > 32) {
			numeroAleatorio = Math.floor(Math.random() * 100);
		}
		return numeroAleatorio;
	}
}

const numAleatorio = new NumAleatorio;

function CheckName(nombreCheck){
	let cantidadClasesAsignadas = 0;
	let clasesAsignadas = []
	clases.forEach((internalClases) =>{
		if (internalClases.alumnos.includes(nombreCheck)) {
			clasesAsignadas[cantidadClasesAsignadas] = internalClases.nombre.toString();
			cantidadClasesAsignadas++;
		}
	});
	clasesAsignadas = clasesAsignadas.join(`, `);
	document.write(`${br} <h4>Clases en las que estuvo ${nombreCheck}: </h4> ${cantidadClasesAsignadas} <br>
		<h5>En las clases de: </h5> ${clasesAsignadas}`);
};


function print() {
	for (let maetriass in nombresMaterias) {
		materias(nombresMaterias[maetriass], datos.profe(1), datos.alumno(numAleatorio.tenToThrirty()));
	}
	clases.forEach((internalClases) =>{
		let arrayPrint0 = [];
		let arrayPrint1 = [];
		let provisionalArrayPrint = []
		for (let nombresAlumnos in internalClases.alumnos) {
			provisionalArrayPrint[nombresAlumnos] = internalClases.alumnos[nombresAlumnos];
		}
		for (let i = 0; i < 15; i++) {
			arrayPrint0[i] = provisionalArrayPrint.shift();
			while (arrayPrint0.includes(undefined)) {
				arrayPrint0.pop();
			}
		}
		for (let i = 0; i < 15; i++) {
			arrayPrint1[i] = provisionalArrayPrint.shift();
			while (arrayPrint1.includes(undefined)) {
				arrayPrint1.pop();
			}
		}
		arrayPrint0 = arrayPrint0.join(`, `);
		arrayPrint1 = arrayPrint1.join(`, `);
		document.write(`<h4>Clase: </h4> ${internalClases.nombre} <br>`);
		document.write(`<h5>Profesor: </h5> ${internalClases.profesor} <br>`);
		document.write(`<h5>Alumnos: </h5> ${arrayPrint0} <br> ${arrayPrint1} ${br}`);
	});
	CheckName("cofla")
	CheckName("martina")
	CheckName("gaspar")
}

print();