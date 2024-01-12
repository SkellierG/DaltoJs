//utilities 

let br = `<br><br>`;

//	division

//for (let i = 0; i < 6; i++) {
//	document.write(br);
//}

//variables globales

const input = document.querySelector(".input");

console.log(input.className);
console.log(input.value);
console.log(input.type = "file");
console.log(input.accept = "image/jpg");

const formulario = document.getElementById("input-formulario");

formulario.minLength = 5;
formulario.maxLength = 10;
formulario.placeholder = "escribime pelotudo";
formulario.required = "true";

const tercero = document.querySelectorAll(".tercero");

tercero[1].style = "color: orange";
tercero[2].style = "color: orange";
tercero[1].style.backgroundColor = "blue";
tercero[2].style.backgroundColor = "#222";

//

const cuarto = document.querySelectorAll(".cuarto");
cuarto[1].classList.add("rojaso");
cuarto[2].classList.add("rojaso");

const quinto = document.querySelectorAll(".quinto");
quinto[1].classList.add("verdaso");
quinto[2].classList.add("verdaso");
quinto[1].classList.add("rojaso");
quinto[2].classList.add("rojaso");
quinto[1].classList.remove("rojaso");
quinto[2].classList.remove("rojaso");


