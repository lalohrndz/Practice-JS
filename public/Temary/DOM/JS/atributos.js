/* 
.-Atributos [ https://es.javascript.info/dom-attributes-and-properties#:~:text=attributes%20%3A%20una%20colecci%C3%B3n%20de%20objetos,con%20propiedades%20nombre%20y%20valor%20.&text=Los%20atributos%20HTML%20tienen%20las,Sus%20valores%20son%20siempre%20strings. ]
? Cuando el navegador carga la página, “lee” (o “parser”(analiza en inglés")) el HTML y genera objetos DOM a partir de él. Para los nodos de elementos, la mayoría de los atributos HTML estándar se convierten automáticamente en propiedades de los objetos DOM.
*/

console.log(document.documentElement.lang);
console.log(document.documentElement.getAttribute("lang"));
console.log(document.querySelector(".link-DOM").href);
console.log(document.querySelector(".link-DOM").getAttribute("href"));

document.documentElement.lang = "en";
console.log(document.documentElement.lang);

document.documentElement.setAttribute("lang","es-MX");
console.log(document.documentElement.lang);

document.querySelector(".link-DOM").setAttribute("target","_blank");
document.querySelector(".link-DOM").setAttribute("rel","noopener");
document.querySelector(".link-DOM").setAttribute("href","www.google.com");

