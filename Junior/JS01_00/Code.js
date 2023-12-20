var hola = 3 ;
var chao = 4 ;
var deam = hola + chao ; 
var activefun = 0 ;
var texfinal = "soy ese" ;
//var onoff = true ;

function deamfun() 
{
	alert("pen " + deam + " " + texfinal + " " + penelope) ;
}

const penelope = 12 //no puede cambiar
//var penelope = 11 ;
//let varnumerica ;
//var varnumerica2 ;
//let varnumerica3 = 14 ;

let numero1, numero2, numero3, numero4 ;

//alert(numero1) ;
//alert(numero2) ;
//alert(numero3) ;
//alert(numero4) ;

let numero11 = 12, numero21 = 33, numero31 = 43, numero41 = 76 ;

//alert(numero11) ;
//alert(numero21) ;
//alert(numero31) ;
//alert(numero41) ;

//alert(deam * deam) ;

//let aweboperro = prompt("awebo prro");

//alert(aweboperro) ;

//let name = prompt("¿Cual es tu nombre?") ;

//alert("Hola mi estimado/a " + name) ;

//suma             x += y , x = x + y 
//resta            x -= y , x = x - y 
//multiplicacioon  x *= y , x = x * y 
//division         x /= y , x = x / y 
//porcentaje       x &= y , x = x % y 
//potencia         x **= y , x = x ** y 

//puertas logicas

//AND              x &= y , x = x & y 
//XOR              x ^= y , x = x ^ y 
//OR               x |= y , x = x | y 


//let valor1 = 34, valor2 = 21, valor3 = 0 ;
//valor3 += valor1 ;
//valor3 %= valor2 ;

//document.write(valor3) ;

//let valorprompt = 0 ;
//let valorprompt1 = 0 ;
//valorprompt = prompt("dime valor 1") ;
//valorprompt1 = prompt("dime valor 2") ;
//let resultadoprompt = valorprompt + valorprompt1 ;
//alert("Tu resultado es " + resultadoprompt) ; 

//let bucle = 0

//function alertbucle() {
//	if (bucle <= 5) {
//		bucle++;
//		alert(bucle);
//	}
//}

//alertbucle()

//console.log(bucle);

let parte00 = "Hola " ;
let parte01 = " como andas?" ;
let fraseentera0 = parte00 + name + parte01 ;

document.write(fraseentera0) ;

let fraseentera1 = `Hola estimado ${name} como va todo?` ;

//alert(fraseentera1) ;

let imagen = `<img src="Resources/mono.jpg" width="100px">` ;

document.write(imagen) ;

let espaciobr = `<br>` ;

//usar siempre estas comillas `` porque admiten dentro estas ""

//prueba = numeros 
//prueba11 = textos

let prueba = 23;
let prueba11 = "23";

document.write(espaciobr);

// A = B
document.write(prueba == prueba11);

document.write(espaciobr);

// los 2 son el mismo valor (incluye diferencia entre texto y numero)
// "23" /= 23
document.write(prueba === prueba11);

document.write(espaciobr);

// A /= B
document.write(prueba != prueba11);

document.write(espaciobr);

// los 2 son distinto valor (incluye diferencia entre texto y numero)
// "23" /= 23
document.write(prueba !== prueba11);

document.write(espaciobr);

//AND &&
//OR  ||
//NOT !

let rancio1 = true;

let rancio2 = false;

if (rancio1 == rancio2) {
	document.write(parte01);
}

else if (!(rancio1) || rancio2) {
	document.write(parte00)
}

else if (rancio1 && rancio2) {
	document.write("holaaaaa")
}

else {
	alert("wena po");
}

