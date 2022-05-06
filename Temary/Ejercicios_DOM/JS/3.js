/* 
.- Key Events [ https://developer.mozilla.org/es/docs/Web/API/KeyboardEvent ]
? Los objetos KeyboardEvent describen una interacción del usuario con el teclado.
? Cada evento describe una tecla; el tipo de evento:

- keydown
- keypress
- keyup
*/

const d = document;

function shortcuts(e){
    console.log("keyCode - ",e.keyCode);
    console.log("code - ",e.code);
    console.log("key - ",e.key);
    console.log("event - ",e);
}

d.addEventListener("keydown",e=>{
    shortcuts(e)
})