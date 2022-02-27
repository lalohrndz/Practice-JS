/* 
.- setTimeOut [ https://developer.mozilla.org/es/docs/Web/API/setTimeout ]
? El método setTimeout() del mixin WindowOrWorkerGlobalScope establece un
? temporizador que ejecuta una función o una porción de código después de
? que transcurre un tiempo establecido.

.- setInterval [ https://developer.mozilla.org/es/docs/Web/API/setInterval ]
? Ejecuta una función o un fragmento de código de forma repetitiva cada vez
? que termina el periodo de tiempo determinado. Devuelve un ID de proceso.

*/

const setTimeOut = setTimeout(() => {
    M.toast({html:`setTimeOut de 3 segundos!`})
}, 3000);

const setInterval = window.setInterval(() => {
   M.toast({html:`setInterval de 2 segundos!`}) 
}, 2000);

clearTimeout(setTimeOut);
clearInterval(setInterval);