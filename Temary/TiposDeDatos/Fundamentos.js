//Variables
var holaMundo = "Hola mundo!"
console.log(holaMundo)

var holaVar = "Hola en var"
let holaLet = "Hola en let"

/* El scope de las variables depende de su declaración.
En caso de que sea declarado con la palabra reservada var la variable existirá dentro del scope
completo del documento y es considerada una mala práctica. En cambio si se declara con la
palabra reservada let la variable trabajará en un ámbito de bloque */

console.log(window)