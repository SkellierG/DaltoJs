 //utilities 

let br = `<br><br>`;

//	division

//for (let i = 0; i < 6; i++) {
//	document.write(br);
//}

//problema

/*cofla quiere comprar un celular, llega a la tienda 
y tiene 3 opciones de celulares, pero los vendedores
no tienen idea del tema*/

/*LISTA
-mostrar las especificaciones de los 3 celulares
-cada uno tiene, color, peso, resolucion pantalla, camara y memoria ram
-deben poder prender, reiniciar, tomar fotos y grabar*/

class Celulares {
	constructor(name, color, peso, resolucion, camara, ram) {
		this.name = name;
		this.color = color;
		this.peso = peso;
		this.resolucion = resolucion;
		this.camara = camara;
		this.ram = ram;
		this.prendido = false;
		this.grabando = false;
		this.nameS = `<h3>${this.name}</h3><br>`;
	}
	prender() {
		if (this.prendido == false) {
			alert("celular prendido");
			this.prendido = true;
		}
		else {
			alert("celular apagado");
			this.prendido = false;
			this.grabando = false;
			this.lenta = false;
		}
	}
	reiniciar() {
		if (this.prendido == false) {
			alert("no se puede reiniciar con el celular apagado");
		}
		else {
			alert("celular reiniciado");
		}
	}
	fotos() {
		if (this.prendido == false) {
			alert("no se puede usar la camara con el celular apagado");
		}
		else {
			alert(`foto sacada en ${this.resolucion}`);
		}
	}
	grabar() {
		if (this.prendido == false) {
			alert("no se puede grabar con el celular apagado");
		}
		else if (this.lenta == true) {
			alert(`ya estas grabando a velocidad lenta`);
		}
		else if (this.grabando == false) {
			alert(`grabando en ${this.resolucion}`);
			this.grabando = true;
		}
		else {
			alert("parando grabacion");
			this.grabando = false;
		}
	}
	viewData() {
		document.write(`
			${this.nameS}
			Color: ${this.color}<br>
			Peso: ${this.peso}<br>
			Resolucion: ${this.resolucion}<br>
			Camara: ${this.camara}<br>
			Ram: ${this.ram}<br><br>
		`);
	}
}

class Caro extends Celulares {
	constructor(name, color, peso, resolucion, camara, ram, camara2) {
		super(name, color, peso, resolucion, camara, ram)
		this.camara2 = camara2;
		this.lenta = false;
	}
	camaraLenta() {
		if (this.prendido == false) {
			alert("no se puede grabar en camara lenta con el celular apagado");
		}
		else if (this.grabando == true) {
			alert(`ya estas grabando a velocidad normal`);
		}
		else if (this.lenta == true){
			alert(`parando grabacion en camara lenta`);
			this.lenta = false;
		}
		else {
			alert(`grabando en camara lenta a ${this.resolucion}`);
			this.lenta = true;
		}
	}
	facial() {
		if (this.prendido == false) {
			alert("celular apagado");
		}
		else {
			alert("reconocimiento facial");
		}
	}
	viewData(){
		document.write(`
			${this.nameS}
			Color: ${this.color}<br>
			Peso: ${this.peso}<br>
			Resolucion: ${this.resolucion}<br>
			Camara1: ${this.camara}<br>
			Camara2: ${this.camara2}<br>
			Ram: ${this.ram}<br><br>
		`);
	}
}

const modelo1 = new Celulares("Praxy B9", "Rojo", "700g",  "720px", "5mpx", "2gb",);
const modelo2 = new Celulares("Jphone 4", "Plata", "600g", "1080px", "10mpx", "4gb",);
const modelo3 = new Celulares("MataH1", "Negro", "625g", "720px", "7mpx", "4gb",);
const modelo4 = new Caro("Jphone10", "veigch", "500g", "2K", "20mpx", "16gb", "10mpx");
const modelo5 = new Caro("Praxy X12", "Negro matte", "525g", "4K", "15mpx", "16gb", "7mpx");

modelo1.viewData();
modelo2.viewData();
modelo3.viewData();
modelo4.viewData();
modelo5.viewData();


/*modelo5.prender();
modelo5.camaraLenta();
modelo5.grabar();
modelo5.camaraLenta();*/

/*modelo2.prender();*/
/*modelo2.grabar();
modelo2.grabar();
modelo2.prender();
modelo2.grabar();
modelo2.prender();
modelo2.grabar();
modelo2.prender();
modelo2.prender();
modelo2.grabar();
modelo2.grabar();*/
