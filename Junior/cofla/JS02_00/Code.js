let br = `<br>`;
let usd = " USD";

//nombres de los chicos y su dinero

let roberto = 1.5;
let pedro = 1.7;
let cofla = 3;

//nombres y precios de cada helado

let palitoDeHeladoDeAgua = 0.6;
let palitoDeHeladoDeCrema = 1;
let bombonHeladoMarcaHeladix = 1.6;
let bombonHeladoMarcaHeladovich = 1.7;
let bombonHeladoMarcaHelardo = 1.8;
let potecitoDeHeladoConConfites = 2.9;
let poteDeCuartoDeKg = 2.9;

//let cantidadDePlata = prompt("¿Cuanto dimero tienes? (en USD)");
//let cantidadDePlata = roberto;
//let cantidadDePlata = pedro;
let cantidadDePlata = cofla;

let writeplata = `<h3>tienes: </h3>`;
document.write(writeplata);
document.write(cantidadDePlata + usd);
document.write(br);
let writecompra = `<h3>vas a comprar: </h3>`;
document.write(writecompra);

if ((cantidadDePlata >= palitoDeHeladoDeAgua) && (cantidadDePlata < palitoDeHeladoDeCrema))  {
	document.write("Agua" + ` ( ${palitoDeHeladoDeAgua}${usd} )`);
	vuelto = cantidadDePlata - palitoDeHeladoDeAgua;
}
else if ((cantidadDePlata >= palitoDeHeladoDeCrema) && (cantidadDePlata < bombonHeladoMarcaHeladix)) {
	document.write("Crema" + ` ( ${palitoDeHeladoDeCrema}${usd} )`);
	vuelto = cantidadDePlata - palitoDeHeladoDeCrema;
}
else if ((cantidadDePlata >= bombonHeladoMarcaHeladix) && (cantidadDePlata < bombonHeladoMarcaHeladovich)) {
	document.write("Heladix" + ` ( ${bombonHeladoMarcaHeladix}${usd} )`);
	vuelto = cantidadDePlata - bombonHeladoMarcaHeladix;
}
else if ((cantidadDePlata >= bombonHeladoMarcaHeladovich) && (cantidadDePlata < bombonHeladoMarcaHelardo)) {
	document.write("Heladovich" + ` ( ${bombonHeladoMarcaHeladovich}${usd} )`);
	vuelto = cantidadDePlata - bombonHeladoMarcaHeladovich;
}
else if ((cantidadDePlata >= bombonHeladoMarcaHelardo) && (cantidadDePlata < potecitoDeHeladoConConfites)) {
	document.write("Helardo" + ` ( ${bombonHeladoMarcaHelardo}${usd} )`);
	vuelto = cantidadDePlata - bombonHeladoMarcaHelardo;
}
else if ((cantidadDePlata >= potecitoDeHeladoConConfites) && (cantidadDePlata > 0)) {
	document.write("Confites o Cuarto de kg" + ` ( ${potecitoDeHeladoConConfites}${usd} )`);
	vuelto = cantidadDePlata - potecitoDeHeladoConConfites;
}
else {
	document.write("Chamo ute no tiene plata");
	vuelto = 0;
}

document.write(br);
let writevuelto = `<h3>vuelto: </h3>`;
document.write(writevuelto);
document.write(vuelto + usd);
