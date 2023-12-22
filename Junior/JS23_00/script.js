//utilities 

let br = `<br><br>`;

//	division

//for (let i = 0; i < 6; i++) {
//	document.write(br);
//}

let array = ["primero", "Segundo", "tercero", 1, 2 ,3];

console.time("tiempo1");
console.time("tiempo2");

console.assert(2 == 1);
console.assert(2 == 2);
console.warn("Esto es una alerta");
console.error("Esto es un error");
console.log("console.info vvvv");
console.info(array);
console.log("Esto es un log vvvv");
console.log(array);
console.log("console.table vvvv");
console.table(array);
console.dir(array);
console.count("count 1");//contar cada vez que se llama
console.count("count 1");
console.count("count 1");
console.count("count 1");
console.count("count 1");
console.count("count 2");
console.count("count 2");
console.count("count 2");
console.count("count 2");
console.countReset("count 2");//resetear una cuenta
console.count("count 2");
console.count("count 2");
console.timeLog("tiempo2");

console.group("Naturaleza");
console.group("Animales");
console.groupCollapsed("Peces");
console.log("Salmon");
console.log("Sierra");
console.log("Jurel");
console.groupEnd();
console.groupCollapsed("Aves");
console.log("Alcon");
console.log("Aguila");
console.log("Loro");
console.groupEnd();
console.groupCollapsed("Terrestres");
console.log("Mamut");
console.log("Paput");
console.log("Perro");
console.groupEnd();
console.groupCollapsed("Insectos");
console.log("Araña");
console.log("Hormiga");
console.log("Mosca");
console.groupEnd();
console.groupEnd();
console.group("Plantas");
console.group("Comestibles");
console.groupCollapsed("Frutas");
console.log("Tomate");
console.log("Manzana");
console.log("Naranja");
console.groupEnd();
console.groupCollapsed("Verduras");
console.log("Brocoli");
console.log("Zanahoria");
console.log("Perejil");
console.groupEnd();
console.groupEnd();
console.group("No comestibles");
console.log("Arbol");
console.log("Cactus");
console.log("Flores");
console.groupEnd();
console.groupEnd();
console.groupEnd();

console.log("Fin del grupo");

console.timeLog("tiempo1");
console.timeEnd("tiempo1");
console.timeEnd("tiempo2");

console.log("%cHola", "color:red; padding: 20px; background: white");