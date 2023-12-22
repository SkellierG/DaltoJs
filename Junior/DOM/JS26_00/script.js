//utilities 

let br = `<br><br>`;

//	division

//for (let i = 0; i < 6; i++) {
//	document.write(br);
//}

const titulo = document.getElementById("titulo");
const parrafo = document.getElementsByTagName("p");
const clases = document.querySelector(".segundo");
const todooo = document.querySelectorAll(".cuarto");

console.log(titulo);
console.log(parrafo);
console.log(clases);
console.log(todooo);
console.info(titulo);
console.info(parrafo[1]);
console.info(clases);
console.info(todooo[1]);

const textTitulo = "obtenido por su id wajajaja";
titulo.textContent = textTitulo;

const textParrafo = "como que se podian seleccionar los elementos directamente por su nombre html";
parrafo[2].textContent = textParrafo;

const textClases = "deecho este elemento esta selecccionado por su clase";
clases.textContent = textClases;

const textTodooo = "como que todo este tiempo las clases no solo servian para CSS";
todooo[1].textContent = textTodooo;