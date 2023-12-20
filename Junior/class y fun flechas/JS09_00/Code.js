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

class animal {
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
}

const perro = new animal("canino", 8, "golden retriever");
const gato = new animal("felino", 4, "gato egipcio");
const pajaro = new animal("aguila", 15, "aguila calva");

/*document.write(perro.inf);
document.write(br);
document.write(gato.inf);
document.write(br);
document.write(pajaro.inf);
console.log(perro);*/

perro.getInfo();
gato.getInfo();
pajaro.getInfo();