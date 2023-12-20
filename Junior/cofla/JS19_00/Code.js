let operacion = parseInt(prompt(`¿Cual operacion quieres realizar? 1.Sumar 2.Restar 3.Multiplicar 4.Dividir 5.potenciar 6.extraer la raiz`));
let resultado = 0;
let operaciontext = ``;
class Calculadora {
	suma(num1, num2) {resultado = Math.fround(num1 + num2); operaciontext = `suma`;};
	resta(num1, num2) {resultado = Math.fround(num1 - num2); operaciontext = `resta`;};
	multi(num1, num2) {resultado = Math.fround(num1 * num2); operaciontext = `multiplicacion`;};
	div(num1, num2) {resultado = Math.fround(num1 / num2); operaciontext = `division`;};
	potencia(num1, exp) {resultado = Math.fround(num1 ** exp); operaciontext = `potencia`;};
	raiz(num1, root) {resultado = Math.fround(num1 ** ( 1 / root )); operaciontext = `raiz`;};
};
const resultadoclass = new Calculadora;
if (operacion >= 1 && operacion <= 6) {
	let digito1 = parseInt(prompt(`Primer digito`));
	let digito2 = parseInt(prompt(`Segundo digito`));
	if (operacion == 1) {resultadoclass.suma(digito1, digito2); document.write(`El resultado de tu ${operaciontext} es: ${resultado}`);};
	if (operacion == 2) {resultadoclass.resta(digito1, digito2); document.write(`El resultado de tu ${operaciontext} es: ${resultado}`);};
	if (operacion == 3) {resultadoclass.multi(digito1, digito2); document.write(`El resultado de tu ${operaciontext} es: ${resultado}`);};
	if (operacion == 4) {resultadoclass.div(digito1, digito2); document.write(`El resultado de tu ${operaciontext} es: ${resultado}`);};
	if (operacion == 5) {resultadoclass.potencia(digito1, digito2); document.write(`El resultado de tu ${operaciontext} es: ${resultado}`);};
	if (operacion == 6) {resultadoclass.raiz(digito1, digito2); document.write(`El resultado de tu ${operaciontext} es: ${resultado}`);};}
else document.write(`valores invalidos`);