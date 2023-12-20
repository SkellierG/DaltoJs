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
/*anotar a cofla en las clases con menos de 20 alumnos*/

//nombres posibles
let nombresPosibles = ["null", "alberto", "sofia", "gaspar", "fernando", "matias", "martin", "martina", "catalina",
	"carlos", "pedro", "juan", "anastasia", "sonia", "armando", "cristina", "paulina", "cristobal", "matilde", "javier",
	"pancho", "alex", "alexander", "gabriel", "bernardo", "beltran", "agustina", "constanza", "alonso", "luis",
	"marcos"];
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
const datos = {
	//nombre de los alumnos (solo hay un cofla)
	alumno: (cantidad)=>{
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
	},
	//nombre del profesor
	profe: ()=>{
		let nombres = [];
		let nombresPosiblesLocal = []
		for (let names in nombresPosibles) {
			nombresPosiblesLocal[names] = nombresPosibles[names];
		}
		let num = numAleatorio.Nombres();
		let nombresPosiblesSlice = nombresPosiblesLocal.slice(num -1, num)
		nombres[0] = nombresPosiblesSlice.toString();
		return nombres;
	}
};

//generador de numeros aleatorios
const numAleatorio = {
	//para determinar la cantidad de alumnos
	tenToThrirty: ()=>{
		let numeroAleatorio = 0;
		while (numeroAleatorio < 10 || numeroAleatorio > 30) {
			numeroAleatorio = Math.floor(Math.random() * 100);
		}
		return Math.floor(numeroAleatorio);
	},
	//para seleccionar los nombres del array
	Nombres: ()=>{
		let numeroAleatorio = 0;
		while (numeroAleatorio < 3 || numeroAleatorio > 31) {
			numeroAleatorio = Math.floor(Math.random() * 100);
		}
		return Math.floor(numeroAleatorio);
	}
}

const namesAndPrint = {
	inscriptName: (nombreCheck)=>{
		let cantidadClasesAsignadas = 0;
		let clasesAsignadas = []
		let cantidadAlumnos = 0;
		clases.forEach((internalClases) =>{
			cantidadAlumnos = 0;
			for (let Alumnado in internalClases.alumnos) {
				cantidadAlumnos++
			}
			if (!(internalClases.alumnos.includes(nombreCheck)) && cantidadAlumnos < 20) {
				internalClases.alumnos.push(nombreCheck.toString());
			}
			if (internalClases.alumnos.includes(nombreCheck)) {
				clasesAsignadas[cantidadClasesAsignadas] = internalClases.nombre.toString();
				cantidadClasesAsignadas++;
			}
		});
		clasesAsignadas = clasesAsignadas.join(`, `);
		document.write(`<h3>Clases en las que se inscribio ${nombreCheck}: </h3> ${cantidadClasesAsignadas} <br>
			<h4>En las clases de: </h4> <h5 style = 'color: pink'>${clasesAsignadas}</h5> ${br}`);
	},
	printClass: ()=>{
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
			document.write(`<h3>Clase: </h3> <h4 style = 'color: green'>${internalClases.nombre}</h4> <br>`);
			document.write(`<h4>Profesor: </h4> <h5 style = 'color: red'>${internalClases.profesor}</h5> <br>`);
			document.write(`<h4>Alumnos: </h4> <h5 style = 'color: blue'>${arrayPrint0}</h5> <br> <h5 style = 'color: blue'>${arrayPrint1}</h5> ${br}`);
		});
	},
	checkName: (nombreCheck)=>{
		let cantidadClasesAsignadas = 0;
		let clasesAsignadas = []
		clases.forEach((internalClases) =>{
			if (internalClases.alumnos.includes(nombreCheck)) {
				clasesAsignadas[cantidadClasesAsignadas] = internalClases.nombre.toString();
				cantidadClasesAsignadas++;
			}
		});
		clasesAsignadas = clasesAsignadas.join(`, `);
		document.write(`${br} <h3>Clases en las que estuvo ${nombreCheck}: </h3> ${cantidadClasesAsignadas} <br>
			<h4>En las clases de: </h4> <h5 style = 'color: orange'>${clasesAsignadas}</h5>`);
	}
}

function print(argument) {
	for (let maetriass in nombresMaterias) {
		materias(nombresMaterias[maetriass], datos.profe(), datos.alumno(numAleatorio.tenToThrirty()));
	}
	namesAndPrint.inscriptName("cofla");
	namesAndPrint.printClass();
	namesAndPrint.checkName("cofla");
	namesAndPrint.checkName("martina");
}

print();