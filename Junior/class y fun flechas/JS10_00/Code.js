 //utilities 

let br = `<br><br>`;

//	division

//for (let i = 0; i < 6; i++) {
//	document.write(br);
//}

//problema

//class animal {
//	contructor(especie, edad, raza){
//		this.esp = especie;
//		this.age = edad;
//		this.rac = raza;
//	}
//}

class Animal {
	constructor(especie, edad, raza){
		this.especie = especie;
		this.edad = edad;
		this.raza = raza;
		this.inf = `soy un ${this.especie}, tengo ${this.edad} año(s) y soy un ${this.raza}`;
	}
	getInfo() {
		document.write(this.inf + br);
		console.log(this.inf)
	}
/*	ladrar(){
		if (this.especie != "canino") {
			document.write(`No puede ladrar porque es un(a) ${this.especie}`);
			document.write(br);
		}
		else {
			document.write('WAOW');
			document.write(br);
		}
	}*/
}

class Perro extends Animal {
	constructor(especie, edad, raza, name) {
		super(especie, edad, raza);
		this.name = null;
	}
	ladrar() {
		document.write(`WAOW`);
		document.write(br);
	}
	set setName(newName) {
		this.name = newName;
	}
	get getName() {
		return this.name;
	}
// volver la funcion ladrar dependeinte de la clase y no del objeto
/*	static ladrar() {
		document.write(`WAOW`);
		document.write(br);
	}*/
}

const perro = new Perro("canino", 8, "golden retriever", "Max");
const gato = new Animal("felino", 4, "gato egipcio");
const pajaro = new Animal("aguila", 15, "aguila calva");

/*document.write(perro.inf);
document.write(br);
document.write(gato.inf);
document.write(br);
document.write(pajaro.inf);
console.log(perro);*/

perro.getInfo();
gato.getInfo();
pajaro.getInfo();

perro.ladrar();
perro.setName = "Firulais";
document.write(perro.getName);
/*Perro.ladrar();
gato.ladrar();
pajaro.ladrar();*/