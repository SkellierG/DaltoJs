//arrays

let br = `<br>`;

let arrays = ["eto e cero pibe", 1, "le conche esto es 2", 3, "me corroooo", "Sexoo"];

document.write(arrays[0]);
document.write(br);
document.write(arrays[1]);
document.write(br);
document.write(arrays[2]);
document.write(br);
document.write(arrays[3]);
document.write(br);
document.write(arrays[4]);
document.write(br);
document.write(arrays[5]);
document.write(br);
document.write(arrays[6]);
document.write(br);
document.write(arrays[7]);

let pene = arrays[2]

document.write(br);
document.write(pene);

let pc = {
	user: "cliente",
	cpu: "Intel celeron dual core",
	ram: "4GB",
	espacio: "297GB",
	espacioDisponible: "31GB"
};

document.write(br);
document.write(pc["user"]);
document.write(br);
document.write(pc["cpu"]);
document.write(br);
document.write(pc["espacio"]);
document.write(br);
document.write(pc["espacioDisponible"]);
document.write(br);

let frase = `<h1>Datos de la computadora:</h1><br>
			 <h4>El usuario de esta pc es: <b>${pc["user"]}<b></h4> <br>
			 <h4>El procesador es: <b>${pc["cpu"]}<b></h4><br>
			 <h4>La memoria ram es de: <b>${pc["ram"]}<b></h4><br>
			 <h4>El espacio total es de: <b>${pc["espacio"]}<b></h4><br>
			 <h4>El espacio disponible es de: <b>${pc["espacioDisponible"]}<b></h4><br>`;

document.write(br);
document.write(frase);
document.write(br);

//loop

let	i = 0;
let a = -1;
let b = 0;

while ( i < 50 ) {
	i++;
	document.write(br);
	document.write(i);
}

do {
	a++;
	document.write(br);
	document.write(a);
}
while ( a !== -1, a < 50 )

while ( b < 50 ) {
	b++
	document.write(br);
	document.write(b);
	if ( b == 10) {
		break;
	}
}
