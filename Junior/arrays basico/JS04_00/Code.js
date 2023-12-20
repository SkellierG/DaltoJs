//for
let br = `<br>`;

let a = 5;

for (let i = 0; i < 6; i++) {
	document.write(i + br);
}

document.write(br);

for (let i = 5; i >= 0; i--) {
	document.write(i + br);
}

document.write(br);

//variable ya declarada

for (a; a >= 0; a--) {
	document.write(a + br);
}

document.write(br);

//continue para saltarse un paso

for (let i = 0; i < 6; i++) {
	if ( i == 3 ) {
		continue;
	}
	document.write(i + br);
}

document.write(br);

//break para parar el for(bucle)

for (let i = 0; i < 6; i++) {
	if ( i == 3 ) {
		break;
	}
	document.write(i + br);
}

//separacion

for (let i = 0; i < 10; i++) {
	document.write(br);
}

//for con arrays

let pc = ["cpu", "gpu", "ram", "cdrom"];
pc.modelo = "HP2009";

for (componente in pc) {
	document.write(componente + br);
}

document.write(br);

for (componente in pc) {
	document.write(pc[componente] + br);
}

document.write(br);

for (componente of pc) {
	document.write(componente + br);
}

//separacion

for (let i = 0; i < 10; i++) {
	document.write(br);
}

//label

let array1 = ["var1", "var2", "var3", "var4", "var5", "var6"];

let array2 = ["let1", "let2", array1, "let4", "let5", "let6"];

nameDelFor:
for (let array in array2) {
	if (array == 2) {
		for (let array of array1) {
//			break nameDelFor;
			document.write(array + br);
		}
	} else {
		document.write(array2[array] + br);
	}
}





//pie de pagina

for (let i = 0; i < 50; i++) {
	document.write(br);
}