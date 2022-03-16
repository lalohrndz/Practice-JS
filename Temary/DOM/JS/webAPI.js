/* 
.- DOM [ https://developer.mozilla.org/es/docs/Glossary/DOM ]
? El DOM es un modelo de documento que se carga en el navegador
? web y que representa el documento como un árbol de nodos, en
? donde cada nodo representa una parte del documento (puede
? tratarse de un elemento, una cadena de texto o un comentario).
*/

/* 
.- Elementos del documento [ https://developer.mozilla.org/es/docs/Web/HTML/Element ]
*/
console.log("window - ",window);
console.log("document - ",document);
console.log("window.document - ",document.head);
console.log("window.document - ",document.body);
console.log("window.document - ",document.charset);
console.log("window.document - ",document.title);
console.log("window.document - ",document.links);
console.log("window.document - ",document.forms);
console.log("window.document - ",document.scripts);
setTimeout(() => {
    console.log("window.document - ",document.getSelection().toString());
}, 3000);

const talk = ()=>{
    let text = document.getElementById("text-talk").value;
    speechSynthesis.speak(new SpeechSynthesisUtterance(text));
}