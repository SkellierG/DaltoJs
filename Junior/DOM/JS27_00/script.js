//utilities 

let br = `<br><br>`;

//	division

//for (let i = 0; i < 6; i++) {
//	document.write(br);
//}

// setAttribute = añadir un atributo a un elemento HTML
// removeAttribute = eliminar un atributo ya existente
// getAttribute = obtiene el valor de un atributo

const ponerNombre = document.getElementById("nombreInput");
const label = document.getElementsByTagName("label")
ponerNombre.setAttribute("ponerla", "si");
ponerNombre.setAttribute("class", "quinto");

const clase = document.querySelector(`[ponerla="si"]`);
clase.setAttribute("type", "text");
clase.removeAttribute(`[ponerla="si"]`);
console.log(clase);
console.log(label);

clase.textContent = "insertarNombre";

if (clase.getAttribute("type") === "text") {
	label[0].setAttribute("style", "color: red");
}