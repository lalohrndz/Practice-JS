/* 
.- Selectores [ https://developer.mozilla.org/es/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors ]
? El metodo de selectores acepta uno o mas selectores seperados por comas entre cada selector  para determinar que elemento o
? elementos deben ser devueltos.

.- Nodos [ https://developer.mozilla.org/es/docs/Web/API/Node/nodeType ]
? La propiedad de solo lectura Node.nodeType retornará un valor positivo entero representando el tipo de nodo.
*/

console.log(document.getElementsByTagName("li"));
console.log(document.getElementsByClassName("card"));
console.log(document.getElementsByName("nombre"));
console.log(document.getElementById("tarjetas"));

console.log(document.querySelector("#tarjetas"));
console.log(document.querySelector(".card"));
console.log(document.querySelectorAll("a"));
console.log(document.querySelector("a"));
console.log("****foreach en queryselectorall****");
document.querySelectorAll("a").forEach((el)=>{
    console.log(el);
})

console.log(document.querySelectorAll(".card")[2]);
console.log(document.querySelectorAll("#listado li"));