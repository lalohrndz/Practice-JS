/* 
.- DOM [ https://developer.mozilla.org/es/docs/Glossary/DOM ]
? El DOM es un modelo de documento que se carga en el navegador
? web y que representa el documento como un árbol de nodos, en
? donde cada nodo representa una parte del documento (puede
? tratarse de un elemento, una cadena de texto o un comentario).
*/

console.log("window - ",window);
console.log("document - ",Document);


const talk = ()=>{
    let text = document.getElementById("text-talk").value;
    speechSynthesis.speak(new SpeechSynthesisUtterance(text));
}