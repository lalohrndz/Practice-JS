/* 
.- Break And Continue [ https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/continue ]
? Este tipo de sentencias son utilizadas dentro de ciclos de control iterativos (Loops) para tener un control interno
? sobre el uso u excepción de etiquetas.

.-Continue
? Termina la ejecución de las sentencias de la iteración actual del buble o la etiqueta y continua la ejecución del buble con la
? próxima iteración.

.-Break
? La sentencia break incluye una etiqueta opcional que permite al programa salir de una sentencia etiquetada.
? La sentencia break necesita estar anidada dentro de la sentencia etiquetada. La sentencia etiquetada puede ser cualquier
? tipo de sentencia; no tiene que ser una sentencia de bucle.
*/

let nBreak = [1,2,3,4,5,6,7,8,9,0]

for(let i=0; i < nBreak.length; i++){
    if(i === 5){
        break;
    }
    console.log(nBreak[i])
}

/* 
! Console clear
*/
console.clear()

let nContinue = [1,2,3,4,5,6,7,8,9,0]

for (let i = 0; i < nContinue.length; i++) {
    if(i === 5){
        continue;
    }
    console.log(nContinue[i])
}

/* 
! Console clear
*/
console.clear()