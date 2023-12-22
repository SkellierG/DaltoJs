//utilities 

let br = `<br><br>`;

//	division

//for (let i = 0; i < 6; i++) {
//	document.write(br);
//}

//variables globales

const titulo = document.getElementById("titulo");

function editar(){
	if (titulo.getAttribute("contentEditable") === "false") {
		titulo.setAttribute("contentEditable", "true");
	}
	else {
		titulo.setAttribute("contentEditable", "false");
	}
};

const titulo2 = document.getElementById("titulo2");
titulo2.setAttribute("dir", "rtl");
titulo2.setAttribute("title", "al reves jaja");

const titulo3 = document.getElementById("titulo3");
titulo3.setAttribute("hidden", "true");

//probar con TAB
const cuarto = document.querySelectorAll(".cuarto");
const quinto = document.querySelectorAll(".quinto");
console.log(cuarto);
cuarto[1].setAttribute("tabindex", "0");
cuarto[2].setAttribute("tabindex", "1");
quinto[1].setAttribute("tabindex", "2");
quinto[2].setAttribute("tabindex", "3");

//

