let textoOperacion = "¿Cual operacion quieres realizar? 1.Sumar 2.Restar 3.Multiplicar 4.Dividir";
let operacion = prompt(textoOperacion);
let digito1 = prompt("Primer digito");
let digito2 = prompt("Segundo digito");
let resultadoSuma = 0;
let resultadoResta = 0;
let resultadoMulti = 0;
let resultadoDiv = 0;

const operaciones = (num1, num2) => {
	resultadoSuma = parseInt(num1) + parseInt(num2);
	resultadoResta = parseInt(num1) - parseInt(num2);
	resultadoMulti = parseInt(num1) * parseInt(num2);
	resultadoDiv = parseInt(num1) / parseInt(num2);
}

if (operacion == 1) {
	operaciones(digito1, digito2);
	document.write(`El resultado de tu suma es: ${resultadoSuma}`);
}
else if (operacion == 2) {
	operaciones(digito1, digito2);
	document.write(`El resultado de tu resta es: ${resultadoResta}`);
}
else if (operacion == 3) {
	operaciones(digito1, digito2);
	document.write(`El resultado de tu multiplicacion es: ${resultadoMulti}`)
}
else if (operacion == 4) {
	operaciones(digito1, digito2);
	document.write(`El resultado de tu division es: ${resultadoDiv}`);
}
else {
	document.write("valores invalidos");
}